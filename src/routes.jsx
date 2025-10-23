

import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/actors",
        element: <Actors />,
      },
      {
        path: "/directors",
        element: <Directors />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      }
    ],
  },
];

export default routes;