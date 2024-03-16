import Page1 from "./Components/Page1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import About from "./Components/About";
import Appcss from "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
