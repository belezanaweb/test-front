import { RouterProvider } from 'react-router-dom';

import router from './routes/router';
import useAppStyles from './styles/useAppStyles';

const App = () => {
  useAppStyles();

  return <RouterProvider router={router} />;
};

export default App;
