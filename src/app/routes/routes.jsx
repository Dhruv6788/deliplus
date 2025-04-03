import HomeLayout from '../../components/layouts/HomeLayout'
import ErrorBoundary from '../../components/common/ErrorBoundry/ErrorBoundry'
import Home from "../../components/pages/home/Home";
import About from "../../components/pages/about/About";
import Menu from "../../components/pages/menu/Menu";
import Contact from "../../components/pages/contact/Contact";


export const routesConfig = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "menu",  // No leading slash
        element: <Menu />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "about", 
        element: <About />
      }, 
      {
        path: "contact", // Removed leading "/"
        element: <Contact />
      }
    ]
  },
];