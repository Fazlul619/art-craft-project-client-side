import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/shared/Login Page/Login";
import Register from "../pages/shared/Register Page/Register";
import AllArtCraftItems from "../pages/AllArtCraftItems/AllArtCraftItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import PrivateRoutes from "./PrivateRoutes";
import ItemDetails from "../pages/ItemDetails/ItemDetails";
import UpdatedItems from "../pages/Updated Craft Items/UpdatedItems";
import Error from "../pages/Error Page/Error";
import ArtCraftItems from "../pages/ArtCraftItemsDetails/ArtCraftItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/addCraftItems"),
      },
      {
        path: "/itemDetails/:id",
        element: <ItemDetails />,
        loader: () => fetch("http://localhost:5000/addCraftItems"),
      },
      {
        path: "/AllArtCraftItems",
        element: <AllArtCraftItems></AllArtCraftItems>,
        loader: () => fetch("http://localhost:5000/addCraftItems"),
      },
      {
        path: "/artCraftItems/:id",
        element: <ArtCraftItems />,
        loader: () => fetch("http://localhost:5000/artCraftItems"),
      },
      {
        path: "/AddCraftItem",
        element: (
          <PrivateRoutes>
            <AddCraftItem></AddCraftItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/MyArtCraftList",
        element: (
          <PrivateRoutes>
            <MyArtCraftList></MyArtCraftList>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/addCraftItems"),
      },
      {
        path: "/updatedItems/:id",
        element: (
          <PrivateRoutes>
            <UpdatedItems></UpdatedItems>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addCraftItems/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
