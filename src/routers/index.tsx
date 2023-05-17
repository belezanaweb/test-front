import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Page } from "./types"

import PageCheckout from "../containers/PageCheckout/PageCheckout"
import Page404 from "../containers/Page404/Page404"

export const pages: Page[] = [
  { path: "/:id?", component: PageCheckout }
]

const MyRoutes = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return (
            <>
              <Route key={path} element={<Component />} path={path} />
            </>
          );
        })}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
