import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from './app/routes/routes';
import "./App.css";

const router = createBrowserRouter(routesConfig, {
  future: {
    v7_relativeSplatPath: true, // Enables relative paths in nested routes
    v7_fetcherPersist: true,   // Retains fetcher state during navigation
    v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
    v7_partialHydration: true, // Supports partial hydration for server-side rendering
    v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
  },
}); 

function App() {
  return (
    <div className="app">
      <RouterProvider future={{ v7_startTransition: true }} router={router} />
    </div>
  );
}

export default App;
