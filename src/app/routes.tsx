import { createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Listings } from "./pages/Listings";
import { PropertyDetails } from "./pages/PropertyDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "listings", Component: Listings },
      { path: "property/:id", Component: PropertyDetails },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
