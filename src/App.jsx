import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./assets/styles/global"
import { AppRoutes } from "./Routes"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>    
  )
}

export default App
