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
        errorElement : <ErrorBoundary />, 
        children : [
          {
            index : true, 
            element :<Navigate to="/menu/sandwiches" />
          },
          {
            path : 'sandwiches', 
            element : <ReceipeList data= {[recipeList[0]]} />
          },
          {
            path : 'platters', 
            element : <ReceipeList data= {[recipeList[1]]} />
          },
          {
            path : 'meats', 
            element : <ReceipeList data= {[recipeList[2]]} />
          },
          {
            path : 'subs', 
            element : <ReceipeList data= {[recipeList[3]]} />
          },
          {
            path : 'omlettes', 
            element : <ReceipeList data= {[recipeList[4]]} />
          },
          {
            path : 'salads', 
            element : <ReceipeList data= {[recipeList[5]]} />
          },
          {
            path : 'wraps', 
            element : <ReceipeList data= {[recipeList[6]]} />
          },
          {
            path : 'specialty-combos', 
            element : <ReceipeList data= {[recipeList[7]]} />
          },
          {
            path : 'cold-sandwiches', 
            element : <ReceipeList data= {[recipeList[8]]} />
          },
          {
            path : 'cakes', 
            element : <ReceipeList data= {[recipeList[9]]} />
          },
        ]
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