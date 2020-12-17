import * as express from 'express';
import { resolve } from 'path';
import renderer from './middleware/renderer';
import { webpackDevMiddleware, webpackHotMiddleware } from './middleware/HMR';

const isProd = process.env.NODE_ENV === 'production';
const app = express();

app.disable('etag');
app.disable('x-powered-by');

if (!isProd) {
  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
}

app.use(express.static(resolve('./public'), { index: false }));

app.use(express.static(resolve('./build'), { index: false }));

app.use(renderer);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server running on port: ${port} 🚀`);
});
