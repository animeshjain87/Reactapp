import React from "react";
import { NavLink, Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Plist from "./Plist";
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Dashboard(props) {
  return (
    <div>

      <div className="entry-board J_entryBoard">
        <div className="container">
          <ul className="external-entries">
            <li className="entry">              
                <Link>
                  Welcome, Admin
              </Link>
            </li> 
        
            <li className="entry">              
                <NavLink to="/">
                  Logout
              </NavLink>
            </li>            
          </ul>
        </div>
      </div>

      <div className="homebanner mb-5">
         <img src={process.env.PUBLIC_URL + '/home_banner.jpg'} /> 
      </div>

      <div className="home-promo">
        <ul className="home-promo-list full-img">
          {Plist.topadvertisment.map((advertisment) => {
              return (
                <li>
                  <Link to="">
                    <img src={advertisment.imgUrl} />
                  </Link>                          
                </li>
              );
            })}
        </ul>
      </div>

      <div className="home-sec home-hot">
        <div className="sec-hd">
          <span className="sec-fontline" />
          <h2 className="sec-title">accessories</h2>
          <span className="sec-fontline" />
        </div>

        <div className="sec-bd">
          <div className="hot-more">
            <Tabs
              className="tab-list"
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
            >
              <Tab className="tab-link" eventKey="home" title="Music Store">
                <div className="list-right">
                  <ul>
                    {Plist.Experiences.map((product) => {
                      return (
                        <li>
                          <a href="#" className="thumb">
                            <img src={product.imgUrl} />
                          </a>
                          <h3 className="title">
                            <a href="#">{product.productName}</a>
                          </h3>
                          <p className="price">{product.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Tab>
              <Tab className="tab-link" eventKey="profile" title="Lifestyle">
                <div className="list-right">
                  <ul>
                    {Plist.LifeStyle.map((product) => {
                      return (
                        <li>
                          <a href="" className="thumb">
                            <img src={product.imgUrl} />
                          </a>
                          <h3 className="title">
                            <a href="">{product.productName}</a>
                          </h3>
                          <p className="price">{product.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Tab>
              <Tab
                className="tab-link"
                eventKey="contact"
                title="Mobile Accessories"
              >
                <div className="list-right">
                  <ul>
                    {Plist.MobileAccessories.map((product) => {
                      return (
                        <li>
                          <a href="" className="thumb">
                            <img src={product.imgUrl} />
                          </a>
                          <h3 className="title">
                            <a href="">{product.productName}</a>
                          </h3>
                          <p className="price">{product.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Main div close below */}
    </div>
  );
}

export default Dashboard;
