import React from 'react';
import { Link } from "react-router-dom";

import RollingCounter from './RollingCounter';
import CircularNumber from './Circular_counter';


const Home = () => {

  const images = ['Images/im(2).png', 'Images/im(3).jpg', 'Images/im1.jpg', 'Images/im4.jpg'];

  return (
    <div className='Home'>

      <div className="top_1">

        <div className="Navbar">
          <nav>
            <div className="logooo">
              <img src="Images/logo.png" height={40} alt="logo" />
            </div>
            <div className="options">
              <button>Services</button>
              <Link className="nav-link" to="/login">
              <button>Login</button>
            </Link>
            </div>
          </nav>
        </div>

        <ul className="gallery">
  <li style={{ background: 'url("Images/im3.jpg")', backgroundSize: "cover" }}></li>
  <li style={{ background: 'url("Images/im2.jpg")', backgroundSize: "cover" }}></li>
  <li style={{ background: 'url("Images/im1.jpg")', backgroundSize: "cover" }}></li>
</ul>



        <div className="counters">
          <div className="head">
            Global Daily Waste Production
          </div>
          <div className="containers">
            <div className="sub-container">
              <CircularNumber number={<RollingCounter start={0} end={821} duration={0} />} svgSrc="Images/im4.png" height="64px" />
              <p>PLastic Waste</p>
            </div>
            <div className="sub-container">
              <CircularNumber number={<RollingCounter start={0} end={147} duration={0} />} svgSrc="Images/im5.png" />
              <p>E-Waste</p>
            </div>
            <div className="sub-container">
              <CircularNumber number={<RollingCounter start={0} end={169} duration={0} />} svgSrc="Images/im6.png" />
              <p>Glass Waste</p>
            </div>
            <div className="sub-container">
              <CircularNumber number={<RollingCounter start={0} end={300} duration={0} />} svgSrc="Images/im7.png" />
              <p>Mettalic Waste</p>
            </div>

            <div className="condition">
              *All the values are in 1000 metric tons
            </div>


          </div>

        </div>

        <div className="cards">
          <section className="section2">
            <div className="box2">
              <div className="txt">
                <p>Our Services</p>
              </div>
              <div className="cont">
                <div className="card">
                  {/* <img src="Images/card2.png" alt="" /> */}
                  {/* <h4>Information & Education</h4> */}
                  <div>
                    <p className='ctop'>Empower your recycling efforts</p>
                    <p>Input your plastic, metallic, and electronic waste to discover their environmental impact. Join our community for waste management and embrace the 3R's - reuse, reduce, recycle.</p>
                  </div>
                </div>
                <div className="card">

                  <div>
                    <p className='ctop'>
                      Track environmental impact
                    </p>
                    <p>
                      We record user data to show collective efforts and encourage waste management practices. Stay informed about daily waste production and progress in waste management
                    </p>
                  </div>
                </div>
                <div className="card">
                  {/* <img src="Images/card2.png" alt="" /> */}
                  {/* <h4>Course & Training</h4> */}
                  <div>
                    <p className='ctop'>Make a difference</p>
                    <p>Understand the impact of your recycling actions on the environment. Join us in promoting sustainability through responsible waste management and fostering a culture of reuse, reduction, and recycling.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="map">
          <section className="section3">
            <div className="cont">
              <div className="img">
                <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d17286.646469859625!2d82.9851481478756!3d25.273099094428908!3m2!1i1024!2i768!4f13.1!2m1!1snearby%20kabadi%20shop!5e0!3m2!1sen!2sin!4v1710446184510!5m2!1sen!2sin" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="search">
                Maps <br /> <h2>Find your nearest waste bank</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati autem vero non deleniti sequi ratione consequatur
                  debitis optio sit quaerat?
                </p>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search your waste bank bank here!"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="footer">
          <div className="content">
            <div className="left">
              <img src="Images/logo2.png" alt="" />
              <br />
              <div className="text">
                <p>
                  Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptas perferendis officiis odit aspernatur cum, enim autem, consequatur accusantium harum eum. Consequuntur, maxime?
                </p>
                <br />
                <p>
                  +91-9999988888
                </p>
                <p>
                  buangin@services.id
                </p>
              </div>
            </div>
            <div className="middle">
              <div className='head'>Company</div>
              <div className='head'>Contact</div>
              <div>About</div>
              <div>Help/FAQ</div>
              <div>Careers</div>
              <div>Press</div>
              <div>Mobile</div>
              <div>Affiliates</div>
            </div>
            <div className="right">
              <b>Our Social Handles</b>
              <img src="svgs/media.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;