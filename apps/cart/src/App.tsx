import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { ListProducts } from "./components/ListProducts";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout></Layout>}>
          <Route path="cart" element={<ListProducts></ListProducts>}></Route>
          <Route path="payment" element={<h1>payment</h1>}></Route>
          <Route path="information" element={<h1>information</h1>}></Route>
        </Route>

        <Route
          path="/"
          element={<Navigate to="/cart" replace={true} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
