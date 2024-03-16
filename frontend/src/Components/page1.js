import React, { useState } from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  const [Plastic, setPlatic] = useState(0);
  const [Rubber, setRubber] = useState(0);
  const [Glass, setGlass] = useState(0);
  const [Ewaste, setEwaste] = useState(0);
  const [Paper, setPaper] = useState(0);
  const [Mettalic, setMettalic] = useState(0);

  const [mystyle, setMystyle] = useState({ });
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
            <Link className="nav-link" to="/login">
              <button>Login</button>
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
              <div>Enter your daily waste in grams</div>
              <div className="counter">
                <button
                  onClick={() => {
                    setPlatic(Plastic - 1);
                  }}
                  disabled={Plastic == 0}
                >
                  -
                </button>
                <b>{Plastic}g</b>
                <button
                  onClick={() => {
                    setPlatic(Plastic + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="impact-txt" style={mystyle}>
                With your consistent efforts for next 30 days <br /> You will be
                able to :- <br />
                <li>
                  {" "}
                  Save enough energy to power a <b>60-watt light bulb</b> for 6
                  hours.
                </li>
                <li>
                  Reduces the demand for <b>petroleum-based plastics</b>..
                </li>
              </div>
            </div>
            <div className="card">
              <img src="Images/im7.png" alt="mettalic" />
              <h4>Steel cans</h4>
              <div>Enter your daily waste in grams</div>
              <div className="counter">
                <button
                  onClick={() => {
                    setMettalic(Mettalic - 1);
                  }}
                  disabled={Mettalic == 0}
                >
                  -
                </button>
                <b>{Mettalic}g</b>
                <button
                  onClick={() => {
                    setMettalic(Mettalic + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="impact-txt" style={mystyle}>
                With your consistent efforts for next 30 days <br /> You will be
                able to :- <br />
                <li>
                  {" "}
                  <b>Save energy</b> and raw materials.
                </li>
                <li>
                  save over <b>2,500 pounds of iron</b> ore.
                </li>
              </div>
            </div>
            <div className="card">
              <img src="Images/im6.png" alt="glass" />
              <h4>Glass Waste</h4>
              <div>Enter your daily waste in grams</div>
              <div className="counter">
                <button
                  onClick={() => {
                    setGlass(Glass - 1);
                  }}
                  disabled={Glass == 0}
                >
                  -
                </button>
                <b>{Glass}g</b>
                <button
                  onClick={() => {
                    setGlass(Glass + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="impact-txt" style={mystyle}>
                With your consistent efforts for next 30 days <br /> You will be
                able to :- <br />
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
              </div>
            </div>
            <div className="card">
              <img src="Images/im4.png" alt="rubber" />
              <h4>Tire recycling</h4>
              <div>Enter your daily waste in grams</div>
              <div className="counter">
                <button
                  onClick={() => {
                    setRubber(Rubber - 1);
                  }}
                  disabled={Rubber == 0}
                >
                  -
                </button>
                <b>{Rubber}g</b>
                <button
                  onClick={() => {
                    setRubber(Rubber + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="impact-txt" style={mystyle}>
                With your consistent efforts for next 30 days <br /> You will be
                able to :- <br />
                <li>
                  {" "}
                  <b>Save landfill</b> space.
                </li>
                <li>
                  Repurposes rubber for <b>playground surfaces, asphalt</b>, and
                  more.
                </li>
              </div>
            </div>
            <div className="card">
              <img src="Images/im4.png" alt="paper" />
              <h4>Paper Waste</h4>
              <div>Enter your daily waste in grams</div>
              <div className="counter">
                <button
                  onClick={() => {
                    setPaper(Paper - 1);
                  }}
                  disabled={Paper == 0}
                >
                  -
                </button>
                <b>{Paper}g</b>
                <button
                  onClick={() => {
                    setPaper(Paper + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="impact-txt" style={mystyle}>
                With your consistent efforts for next 30 days <br /> You will be
                able to :- <br />
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
            <div className="card">
              <img src="Images/im4.png" alt="E-waste" />
              <h4>E-Waste</h4>
              <div>Enter your daily waste in grams</div>
              <div className="counter">
                <button
                  onClick={() => {
                    setEwaste(Ewaste - 1);
                  }}
                  disabled={Ewaste == 0}
                >
                  -
                </button>
                <b>{Ewaste}g</b>
                <button
                  onClick={() => {
                    setEwaste(Ewaste + 1);
                  }}
                >
                  +
                </button>
              </div>
              <div className="impact-txt" style={mystyle}>
                With your consistent efforts for next 30 days <br /> You will be
                able to :- <br />
                <li>
                  {" "}
                  <b>Prevents toxic materials</b> like lead and mercury ,from
                  leaching into the soil.
                </li>
                <li>
                  <b>Save energy</b> used in manufacturing new electronics.
                </li>
              </div>
            </div>
          </div>
          <button
            id="submit-btn"
            onClick={() => {
              setMystyle({     opacity:'1',
                  animation: 'typing 5s steps(40, end), blink-caret 0.75s step-end infinite',
              })
            }}
          >
            See Impact
          </button>
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
