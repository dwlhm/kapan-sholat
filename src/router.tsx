import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/pages.home.tsx";
import Bulanan from "./pages/bulanan/pages.bulanan.tsx"
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jadwal-bulanan",
    element: <Bulanan />
  }
]);

export default router;
