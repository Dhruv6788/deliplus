import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import ErrorBoundary from "./components/common/ErrorBoundry/ErrorBoundry";
import Home from "./components/pages/home/";
import About from "./components/pages/about/";
import Menu from "./components/pages/menu/";
import Contact from "./components/pages/contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <HomeLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<ErrorBoundary />} />
          </Routes>
        </HomeLayout>
      </Router>
    </div>
  );
}

export default App;
