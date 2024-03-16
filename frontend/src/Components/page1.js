import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import noteContext from "../Context/noteContext";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const context = useContext(noteContext);
  // let history = useNavigate();
  const { Data, setData, addData, getData } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // getData();
    } else {
      history("/login");
    }
  }, []);

  const [Plastic, setPlatic] = useState(0);
  const [Rubber, setRubber] = useState(0);
  const [Glass, setGlass] = useState(0);
  const [Ewaste, setEwaste] = useState(0);
  const [Paper, setPaper] = useState(0);
  const [Mettalic, setMettalic] = useState(0);

  const handleclick = (e) => {
    e.preventDefault();
    addData(Plastic, Glass, 1);
  };

  const [mystyle, setMystyle] = useState({});
  return (
    <div className="main">
      <div className="Navbar">
        <nav>
          <div className="img">
            <img src="Images/logo.png" alt="logo" />
          </div>
          <div className="options">
            <Link className="nav-link" to="/">
              <button>Home</button>
            </Link>
            <Link className="nav-link" to="/about">
              <button>About</button>
            </Link>
            <Link className="nav-link" to="/">
              <button>Logout</button>
            </Link>
          </div>
        </nav>
      </div>
      <section className="section1">
        <div className="box1">
          <div className="txt">
            <h3>Hi, Folks!</h3>
            <h2>Inovation Dedication and Sustainable Solution</h2>
            <p>
              Our application is dedicated to{" "}
              <b>environmental sustainability</b>. We believe that responsible{" "}
              <b>waste management</b> plays a crucial role in preserving our
              planet. By using this app, you contribute to a cleaner, greener
              future
            </p>
            <button>Veiw Details</button>
          </div>
          <div className="img">
            <img src="Images/hero.png" alt="hero" />
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="box2">
          <div className="txt">
            <h2>Welcome to Your Recycling Dashboard!</h2> <br />
            <b>Make Every Day Count 🌿♻️</b> <br />
            We trust that you make diligent efforts to recycle the waste you
            generate 🌎💚
          </div>
          <div className="cont">
            <div className="card">
              <img src="Images/im4.png" alt="plastic" />
              <h4>Plastic Waste</h4>
              <div>Enter the data</div>
              <input
                value={Plastic}
                onChange={(e) => {
                  setPlatic(e.target.value);
                }}
                type="number"
                name="counter"
                id="counter"
                placeholder="Amount in grams"
              />
            </div>
            <div className="card">
              <img src="Images/im7.png" alt="mettalic" />
              <h4>Mettalic waste</h4>
              <div>Enter the data </div>
              <input
                type="number"
                value={Mettalic}
                onChange={(e) => {
                  setPlatic(e.target.value);
                }}
                name="counter"
                id="counter"
                placeholder="Amount in grams"
              />
            </div>
            <div className="card">
              <img src="Images/im6.png" alt="glass" />
              <h4>Glass Waste</h4>
              <div>Enter the data </div>
              <input
                type="number"
                value={Glass}
                onChange={(e) => {
                  setPlatic(e.target.value);
                }}
                name="counter"
                id="counter"
                placeholder="Amount in grams"
              />
            </div>
            <div className="card">
              <img src="Images/paper_waste.png" alt="paper" />
              <h4>Paper Waste</h4>
              <div>Enter the data </div>
              <input
                type="number"
                value={Paper}
                onChange={(e) => {
                  setPlatic(e.target.value);
                }}
                name="counter"
                id="counter"
                placeholder="Amount in grams"
              />
            </div>
            <div className="card">
              <img src="Images/battery.png" alt="E-waste" />
              <h4>E-Waste</h4>
              <div>Enter the data </div>
              <input
                type="number"
                value={Ewaste}
                onChange={(e) => {
                  setPlatic(e.target.value);
                }}
                name="counter"
                id="counter"
                placeholder="Amount in grams"
              />
            </div>
          </div>
          <button
            id="submit-btn"
            onClick={() => {
              setMystyle({
                opacity: "1",
                animation:
                  "typing 5s steps(40, end), blink-caret 0.75s step-end infinite",
                height: "400px",
              });
              handleclick;
            }}
          >
            See Impact
          </button>
          <div className="feedback">
            <h3>Impact you have created</h3>
            <div className="impact-txt" style={mystyle}>
              With your consistent efforts days <br /> You will be able to :-{" "}
              <br />
              <li>
                {" "}
                <b>Save energy by melting</b> them at a lower temperature than
                making new glass
              </li>
              <li>
                <b>Reduces landfill</b> waste and the need for raw materials.
              </li>
              <li>
                save over <b>400 pounds of carbon dioxide</b> emissions.
              </li>
              <li>
                {" "}
                <b>Save energy</b> and raw materials.
              </li>
              <li>
                save over <b>2,500 pounds of iron</b> ore.
              </li>
              <li>
                Save enough energy to power a <b>60-watt light bulb</b> for 6
                hours.
              </li>
              <li>
                Reduces the demand for <b>petroleum-based plastics</b>..
              </li>
              <li>
                {" "}
                <b>Prevents toxic materials</b> like lead and mercury ,from
                leaching into the soil.
              </li>
              <li>
                <b>Save energy</b> used in manufacturing new electronics.
              </li>
              <li>
                {" "}
                Save <b>17 trees</b> from being cut down 🌳
              </li>
              <li>
                Save <b>7000 gallons</b> of Water 💧
              </li>
              <li>
                Save <b>4,100 kilowatt-hours</b> of energy ⚡
              </li>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="user_record">
          <div className="txt"></div>
          <div className="bar_sectn"></div>
        </div>
      </section>
      <div className="footer">
        <div className="content">
          <div className="left">
            <img src="Images/logo2.png" alt="logo" />
            <br />
            <div className="text">
              <p>
                Address: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Veniam voluptas perferendis officiis odit aspernatur cum,
                enim autem, consequatur accusantium harum eum. Consequuntur,
                maxime?
              </p>
              <br />
              <p>+91-9999988888</p>
              <p>buangin@services.id</p>
            </div>
          </div>
          <div className="middle">
            <div className="head">Company</div>
            <div className="head">Contact</div>
            <div>About</div>
            <div>Help/FAQ</div>
            <div>Careers</div>
            <div>Press</div>
            <div>Mobile</div>
            <div>Affiliates</div>
          </div>
          <div className="right">
            <b>Our Social Handles</b>
            <img src="Images/media.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
