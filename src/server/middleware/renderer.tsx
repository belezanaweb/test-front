import * as express from 'express';
import * as React from 'react';
import { resolve } from 'path';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { CookiesProvider } from 'react-cookie';

import App from '../../shared/app';
import configureStore from '../../shared/store';

const router = express.Router();

const statsFile = resolve('./build/loadable-stats.json');

router.get('*', async (req: any, res, next) => {
  const context = {};
  const paymentData = req.universalCookies.cookies.form ? JSON.parse(req.universalCookies.cookies.form) : {};
  const store = configureStore({ isServer: true }, { cart: { data: null, loading: false, error: false }, forms: { payment: paymentData  } });
  const sagaPromises = store.run.toPromise();

  await Promise.all(App.getInitialProps(store, req.path, req.url.replace(req.path, '')));

  const extractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });

  const jsx = extractor.collectChunks(
    <CookiesProvider cookies={req.universalCookies}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </CookiesProvider>
  );

  renderToStaticMarkup(jsx);
  store.close();

  try {
    await sagaPromises;
  } catch (e) {
    return next(e);
  }

  const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
  const reduxState = `<script id="redux-state">__REDUX_STATE__ = ${stateString}</script>`;

  const tags = {
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags(),
    scripts: reduxState + extractor.getScriptTags(),
  };

  return res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Grupo Boticário</title>
      ${tags.links}
      ${tags.styles}
    </head>
    <body>
      <div id="root">${renderToString(jsx)}</div>
      ${tags.scripts}
    </body>
    </html>
  `);
});

export default router;
