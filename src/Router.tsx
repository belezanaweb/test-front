import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Template from './template';

import Bag from '_pages/Bag';

const BAG = '/bag';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={BAG} replace />} />
      <Route path="/" element={<Template />}>
        <Route index path={BAG} element={<Bag />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
