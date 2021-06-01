import Grid from "@material-ui/core/Grid"
// import { Link } from 'react-router-dom';
import "./LandingPageOne.css"

import * as Scroll from "react-scroll"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

import { useHistory } from "react-router-dom"

function LandingPageOne() {

  let history = useHistory()
  return (
    <div>
      <div
        className="main-div"
        style={{
          backgroundImage: `url("https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/07/LindseyRef.jpg")`,
          height: "850px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container>
          <Grid item lg={6} md={6}>
            <div className="top-div-left">
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    src={
                      "https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-logo-icon.png"
                    }
                  />
                </div>
                <div style={{ paddingLeft: "25px" }}>
                  <h2 className="top-text-div-top">GAS AND OIL</h2>
                  <h3 className="top-text-div-bottom">COMPANY</h3>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6}>
            <div className="top-div-right">
              <Link
                activeClass="active"
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="top-links"
              >
                {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                <span className="side-menu__label" style={{ color: "#fff" }}>
                  ABOUT US
                </span>
              </Link>

              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="top-links"
              >
                {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                <span className="side-menu__label" style={{ color: "#fff" }}>
                  PRICING
                </span>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="top-links"
              >
                {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                <span className="side-menu__label" style={{ color: "#fff" }}>
                  CONTACT
                </span>
              </Link>

              <Link
                activeClass="active"
                to="ALL-BLOCKS"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="top-links"
              >
                {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                <span className="side-menu__label" style={{ color: "#fff" }}>
                  <div class="dropdown">
                    <span class="dropbtn">ALL BLOCKS</span>
                    <div class="dropdown-content">
                      <Link
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">About Us</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Services</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="benefits"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Benefits</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="counters"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Counters</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="pricing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Pricing</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Testimonials</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="team"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Team</span>
                      </Link>
                      <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="top-links"
                      >
                        {/* <i className="side-menu__icon typcn typcn-th-large-outline hor-icon"></i> */}
                        <span className="side-menu__label">Contact</span>
                      </Link>
                    </div>
                  </div>
                </span>
              </Link>

              <Link
                className="top-links"
                onClick={() => history.push("/auth/login")}
              >
                LOGIN
              </Link>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <div className="bottom-div">
              <h4 className="bottm-div-text-one">WELCOME TO OUR COMPANY</h4>
              <h1 className="bottm-div-text-two">Discover out most</h1>
              <h1 className="bottm-div-text-three">Successful projects</h1>
              <h3 className="bottm-div-text-four">
                To meet the growing worldwide demand for energy while preparing
                for the future.
              </h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default LandingPageOne
