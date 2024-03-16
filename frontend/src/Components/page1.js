import React, { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import noteContext from "../Context/noteContext";
import CircularProgressBar from "./CircularProgressBar";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  // const host = "http://localhost:5000";
  // let history = useNavigate();
  const Datatinitial = [];
  const [Data, setData] = useState(Datatinitial);
  const stamnt = [
    ". Start Small: Begin by recycling common household items like paper, plastic bottles, and aluminum cans.",
    ". Know Your Local Recycling Guidelines: Familiarize yourself with what materials are accepted for recycling in your area.",
    ". Use Recycling Bins: Place recycling bins in convenient locations throughout your home to encourage recycling.",
    ". Reduce Junk Mail: Opt out of receiving unwanted mail to reduce paper waste.",
    ". Reuse Containers: Reuse glass jars, plastic containers, and other packaging instead of throwing them away.",
    ". Compost Organic Waste: Start a compost pile for food scraps and yard waste to reduce landfill waste.",
    ". Choose Recyclable Packaging: Look for products with minimal packaging or packaging that is recyclable.",
    ". Support Recycling Programs: Participate in community recycling programs and events.",
    ". Educate Others: Spread awareness about recycling and encourage friends and family to participate.",
    ". Recycle Electronics: Dispose of old electronics responsibly through e-waste recycling programs.",
    ". Upcycle Materials: Get creative and repurpose items for new uses instead of discarding them.",
    ". Reduce Food Waste: Plan meals carefully to minimize food waste and compost any unavoidable scraps.",
    ". Recycle Batteries: Properly dispose of batteries through designated recycling centers to prevent environmental damage.",
    ". Donate Unused Items: Donate clothing, furniture, and other household items to charity instead of throwing them away.",
    ". Avoid Single-Use Plastics: Use reusable water bottles, shopping bags, and utensils to reduce plastic waste.",
    ". Recycle Paper Properly: Remove any contaminants (like staples or tape) from paper before recycling.",
    ". Support Sustainable Brands: Choose products from companies committed to sustainable practices and packaging.",
    ". Participate in Clothing Swaps: Organize or participate in clothing swap events to give new life to unwanted clothing.",
    ". Dispose of Hazardous Waste Responsibly: Dispose of hazardous household items like paint, chemicals, and light bulbs at designated facilities.",
    ". Recycle Metal Scraps: Collect and recycle metal scraps from household projects or repairs.",
  ];
  const [count, setCount] = useState(0);

  const [Plastic, setPlatic] = useState(0);
  const [Glass, setGlass] = useState(0);
  const [Ewaste, setEwaste] = useState(0);
  const [Paper, setPaper] = useState(0);
  const [Mettalic, setMettalic] = useState(0);
  var Water_Saved;
  var CO2;
  var Energy_Saved;
  Water_Saved =
    Paper * 0.026 + Mettalic * 16 + Plastic * 0.025 + Glass * 0.00015;
  CO2 = Paper * 1.2 + Mettalic * 10 + Plastic * 3 + Glass * 0.5 + Ewaste * 1;
  Energy_Saved =
    Paper * 0.045 +
    Mettalic * 0.01 +
    Plastic * 0.0075 +
    Glass * 0.0002 +
    Ewaste * 0.04;
  const handleclick = (e) => {};
  const [mystyle, setMystyle] = useState({});
  return (
    <div className="main">
      <div className="Navbar">
        <nav>
          <div className="img">
            <img src="Images/logo.png" alt="logo" />
          </div>
          <div className="options">
            <Link className="nav-link" to="/main">
              <button>Home</button>
            </Link>
            <Link className="nav-link" to="/about">
              <button>About</button>
            </Link>
            <Link className="nav-link" to="/info">
              <button>Resources</button>
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
            <Link className="nav-link" to="/info">
              <button>Veiw Details</button>
            </Link>
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
                  setMettalic(e.target.value);
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
                  setGlass(e.target.value);
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
                  setPaper(e.target.value);
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
                  setEwaste(e.target.value);
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
              count == stamnt.length ? setCount(0) : setCount(count + 2);
            }}
          >
            See Impact
          </button>
          <div className="feedback2">
            <h3>Tips of the Day:-</h3>

            <div className="impact-txt" style={mystyle}>
              1: {stamnt[count]} <br />
              2: {stamnt[count + 1]} <br />
              3: {stamnt[count + 2]}
            </div>
          </div>
        </div>
      </section>
      <div className="feedback">
        <div className="heading">Sustainabilty Metrics</div>

        <div className="achievement">
          <div className="figure">
            <CircularProgressBar data={CO2} target={11000} />
          </div>
          <div className="text">
            Congratulations on your environmental efforts! You set out to reduce
            CO2 emissions by 11000 g, and your dedication has led to a reduction
            of {CO2} g. Your commitment to sustainability is making a tangible
            impact on our planet's health. Let's continue striving for even
            greater achievements together.
          </div>
        </div>
        <div className="achievement">
          <div className="text">
            Celebrate your fluid commitment to sustainability! With a goal to
            save water by 173 liters, you've successfully conserved
            {Water_Saved} liters. Your dedication flows, not only making a
            difference but also inspiring greater environmental consciousness.
            Let's persist in our efforts, fluidly striving for continued
            progress and positive impact across various fronts.
          </div>

          <div className="figure">
            <CircularProgressBar data={Water_Saved} target={173} />
          </div>
        </div>
        <div className="achievement">
          <div className="figure">
            <CircularProgressBar data={Energy_Saved} target={10} />
          </div>
          <div className="text">
            Empower your dedication to sustainability! With a goal to save
            energy by 10 kWh, you've successfully achieved a reduction of{" "}
            {Energy_Saved} kWh. Your commitment fuels progress, not only
            energizing change but also illuminating greater environmental
            consciousness. Let's persist in our efforts, empowering ongoing
            advancements and positive impact across various fronts.
          </div>
        </div>
      </div>
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
