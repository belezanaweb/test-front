import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import router from './routes/router';

const Strict = () => (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

ReactDOM.render(<Strict />, document.getElementById('root'));

serviceWorker.unregister();
