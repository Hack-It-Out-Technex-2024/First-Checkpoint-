import React from "react";
import { useNavigate } from "react-router-dom";
import { Link ,useLocation} from "react-router-dom";

const page1 = () => {
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
            Our application is dedicated to <b>environmental sustainability</b>. We believe that responsible <b>waste management</b> plays a crucial role in preserving our planet. By using this app, you contribute to a cleaner, greener future
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
            Category <br /> <h2>We Offer Best Services</h2>
          </div>
          <div className="cont">
            <div className="card">
              <img src="Images/card2.png" alt="" />
              <h4>Information & Education</h4>
              <div>
                Built Wicket longer admire do barton vanity itself do in it.
              </div>
            </div>
            <div className="card">
              <img src="Images/card2.png" alt="" />
              <h4>Course & Training</h4>
              <div>
                Built Wicket longer admire do barton vanity itself do in it.
              </div>
            </div>
            <div className="card">
              <img src="Images/card2.png" alt="" />
              <h4>Course & Training</h4>
              <div>
                Built Wicket longer admire do barton vanity itself do in it.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="cont">
          <div className="img">
          <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d17286.646469859625!2d82.9851481478756!3d25.273099094428908!3m2!1i1024!2i768!4f13.1!2m1!1snearby%20kabadi%20shop!5e0!3m2!1sen!2sin!4v1710446184510!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default page1;
