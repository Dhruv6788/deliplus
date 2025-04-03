import HomeLayout from "../../components/layouts/HomeLayout/HomeLayout";
import Home from "../../components/pages/home/Home";
import Menu from  '../../components/pages/menu/Menu'
import About from '../../components/pages/about/About'
import ErrorBoundary from '../../components/common/ErrorBoundry'
import ReceipeList from "../../components/common/recepiList";
import { recipeList } from "../../constants/dumpData";
import { Navigate } from "react-router-dom";
import Contact from "../../components/pages/contact/Contact";

export const routesConfig = [
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true, // Makes this the default child route
        element: <Home />
      },
      {
        path : '/menu', 
        element : <Menu /> ,
        children : [
          {
            index : true,
            element : <Menu />
          }
        ],
        errorElement : <ErrorBoundary />
      },
      {
        path : '/about', 
        element : <About />
      }, 
      {
        path : 'contact',
        element : <Contact />
      }
    ]
  },
]