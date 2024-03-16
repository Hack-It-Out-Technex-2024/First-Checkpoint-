import Page1 from "./Components/Page1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import About from "./Components/About";
import Information from "./Components/Information";
import Appcss from "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/main" element={<Page1 />}/>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/info" element={<Information />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
