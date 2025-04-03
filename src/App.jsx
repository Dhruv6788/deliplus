import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./app/routes/routes";
import "./App.css";

const router = createBrowserRouter(routesConfig); // Create router outside the component

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
