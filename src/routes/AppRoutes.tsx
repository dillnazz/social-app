import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./routes";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes