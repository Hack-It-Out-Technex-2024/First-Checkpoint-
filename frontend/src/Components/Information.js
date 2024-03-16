import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="Information">
      <div className="top">
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
        <div className="content">
          <img src="Images/infopage.png" alt="infopage " />
        </div>
      </div>

      <div className="middle_1">
        <div className="mid_content">
          <div className="partext">
            <div className="img">
              <img src="Images/im11.jpg" alt="" />
            </div>
            <div className="texts">
              <div className="heading">Collection and Segregation</div>
              <div className="para">
                The first step in managing waste in Information Education and
                Technology involves efficient collection and segregation
                practices. Waste collection involves gathering waste from homes
                or businesses, while segregation separates it into categories
                like organic, recyclable, hazardous, and non-recyclable. This
                process ensures proper disposal methods are used, such as
                composting organic waste, recycling recyclables, and safely
                handling hazardous waste, leading to a more sustainable waste
                management system.
              </div>
            </div>
          </div>
          <div className="partext">
            <div className="img">
              <img src="Images/im12.jpg" alt="" />
            </div>
            <div className="texts">
              <div className="heading">Transportation and Logistics</div>
              <div className="para">
                Transportation and logistics of waste material involve efficient
                planning, vehicle deployment, and route optimization.
                Specialized trucks collect segregated waste from various
                sources, ensuring safe handling and compliance with
                environmental regulations. Recycling centers, landfills, or
                treatment facilities receive the waste, facilitating proper
                disposal or processing to minimize environmental impact and
                maximize resource recovery.
              </div>
            </div>
          </div>
          <div className="partext">
            <div className="img">
              <img src="Images/im13.jpg" alt="" />
            </div>
            <div className="texts">
              <div className="heading">Recovery and Recycling</div>
              <div className="para">
                Innovative technologies are employed to recover valuable
                resources from electronic waste, such as precious metals from
                circuit boards and plastics from electronic casings. Recycling
                initiatives in Information and technologies aim to reduce
                resource depletion and promote a circular economy by
                reintroducing recycled materials into new products. Recycling
                facilities sort and process recyclable materials like paper,
                plastics, glass, and metals to create new products. This reduces
                the demand for raw materials, conserves energy, and decreases
                pollution, contributing to a more sustainable and circular
                economy.
              </div>
            </div>
          </div>
          <div className="partext">
            <div className="img">
              <img src="Images/im14.jpg" alt="" />
            </div>
            <div className="texts">
              <div className="heading">Re-Manufacturing and Reuse</div>
              <div className="para">
                Re-manufacturing and reuse of waste material involve
                refurbishing or repurposing discarded items to extend their
                lifespan. This process includes repairing, refurbishing, or
                converting waste into new products, reducing the need for virgin
                materials. It promotes resource conservation, minimizes waste
                generation, and supports a more circular and sustainable
                economy. Certain waste components, such as functional
                electronics or reusable parts, undergo re-manufacturing
                processes to extend their life cycle. This approach reduces the
                demand for new raw materials and encourages the reuse of
                existing resources
              </div>
            </div>
          </div>
          <div className="partext">
            <div className="img">
              <img src="Images/im15.jpg" alt="" />
            </div>
            <div className="texts">
              <div className="heading">Disposal and Combustion</div>
              <div className="para">
                Disposal of waste material involves landfilling or incineration.
                Landfills bury waste, managing methane emissions. Incineration
                burns waste to produce energy, reducing volume. Both methods
                require environmental safeguards to minimize pollution.
                Sustainable waste management focuses on waste reduction,
                recycling, and advanced technologies like waste-to-energy to
                mitigate environmental impacts and promote resource
                conservation. Proper disposal practices prevent environmental
                pollution and ensure compliance with waste management
                regulations.
              </div>
            </div>
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

export default Information;
