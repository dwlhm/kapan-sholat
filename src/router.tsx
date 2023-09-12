import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home/pages.home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
