import React from "react";
import { Link, useLocation } from "react-router-dom";

const about = () => {
  return (
    <div className="page">
      <div className="top">
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
        <div className="content">
          <div className="image">
            <img src="Images/About1.png" alt="about" />
          </div>
          <div className="text">
            {/* <br /> */}
            <h1>Innovation Dedication</h1>
            {/* <br/> */}
            <h1>and Sustainable Solution</h1>
            {/* <br /> */}
            <p>
            In the realm of waste management, innovation, dedication, and sustainable solutions play pivotal roles in addressing the global challenge of waste accumulation. Innovation drives the development of advanced technologies such as waste-to-energy systems, recycling innovations, and smart waste management solutions that optimize resource utilization and minimize environmental impact. 
            </p>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="content2">
          <div className="text2">
            <h3>About me</h3>
            {/* <br /> */}
            <h1>Goals and Objectives</h1>
            {/* <br /> */}
            <p>
              Our platform dedicated to making a positive impact on
              the world, one small action at a time. We believe in the power of
              individual efforts to create substantial change, and our mission
              is to inspire and empower people like you to take action towards
              better waste management practices. In a world where the scale of
              global challenges can often feel overwhelming, it's easy to
              underestimate the impact of our individual choices. But here's the
              truth: every action we take, no matter how small, has the
              potential to ripple out and create meaningful change. By taking
              responsibility for our waste, we not only reduce our environmental
              footprint but also contribute to a cleaner, healthier planet for
              future generations. Our platform is more than just a resource—it's
              a catalyst for transformation. We're here to provide you with the
              tools, knowledge, and support you need to make a real difference
              in your own life and in the world around you. Whether you're just
              starting out on your waste management journey or looking to deepen
              your commitment, we're here to guide you every step of the way.
              But perhaps most importantly, we want to remind you of the
              incredible power you hold as an individual. It's easy to feel
              insignificant in the face of global challenges, but the truth is
              that you have the power to change the world. Your actions matter,
              and together, we can create a future where waste is minimized,
              resources are conserved, and the planet thrives.
            </p>
          </div>

          <div className="image2">
            <img src="Images/About2.png" alt="about" />
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

export default about;
