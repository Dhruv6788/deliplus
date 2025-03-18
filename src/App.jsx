import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./app/routes/routes";
import "./App.css";

function App() {
  return (
    <div className="app">
        <RouterProvider router={createBrowserRouter(routesConfig)} />
        {/* footer  */}
     
    </div>
  )
}

export default App;