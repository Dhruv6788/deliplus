import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./components/pages/home";
import Menu from './components/pages/menu/Menu'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import ErrorBoundary from "./components/common/ErrorBoundry/ErrorBoundry";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
              <Route path="/" element={<HomeLayout />}> 
                  <Route path="/" errorElement={<ErrorBoundary />} element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
