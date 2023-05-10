import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Template from './template';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<></>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
