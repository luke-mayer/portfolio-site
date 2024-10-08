import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
]);
