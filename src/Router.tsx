import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Template from './template';

import Bag from '_pages/Bag';
import Payment from '_pages/Payment';

const BAG = '/bag';
const PAYMENT = '/payment';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={BAG} replace />} />
      <Route path="/" element={<Template />}>
        <Route index path={BAG} element={<Bag />} />
        <Route path={PAYMENT} element={<Payment />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
