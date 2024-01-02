import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { Food } from "./pages/Food";
import { Drinks } from "./pages/Drinks";
import { NavBar } from "./components/menus/NavBar";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    element: <SecondaryLayout />,
    children: [
      { path: "/food", element: <Food /> },
      { path: "/drinks", element: <Drinks /> },
    ],
  },
  { path: "/contact", element: <Contact /> },
]);

/* function HomeLayout() {
  return (
    <>
      <HomeNav />
      <Outlet />
    </>
  );
} */

function SecondaryLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
