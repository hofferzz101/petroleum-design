import Grid from '@material-ui/core/Grid';
import DLyDni from "../../../../../DLyDni.jpeg";
import {Link} from "react-router-dom";
import './WelcomePage.css';
import TemporaryDrawer from "./Hamburger";

const WelcomePage = ()=>{
    return(
       <div className="main-div">
             <div className="hamburger-icon"><TemporaryDrawer/></div>
           <div className="header-div">
              
              <div className="logo"><h1 className="logo-text">TANDEM</h1></div>
              <div className="header-div-wrap">
              <div className="home-text-div"><h4 className="home-text"><Link>Home</Link></h4></div>
              <div className="home-text-div"><h4 className="home-text"><Link>About Us</Link></h4></div>
              <div className="home-text-div"><h4 className="home-text"><Link>Our Technology</Link></h4></div>
              <div className="login-text"><h4 className="login-text"><Link to="/auth/login">Login</Link></h4></div>
              </div>
              
           </div>
          
           
           <Grid container>
               <Grid item lg={6} md={6} sm={12} className="grid-left">
                  <div className="grid-left-inner">
                  <div className="grid-left-inner-textWrapper">
                  <h1 className="grid-left-heading">WELCOME TO TANDEM</h1>
                  <h3 className="grid-left-paragraph">~90% of all terminal incidents are caused by human error, with 60% of these incidents attributable to faulty order entry. We’re here to change that.</h3>
                  </div>
                  </div>
               </Grid>

               <Grid className="grid-right" item lg={6} md={6} sm={12}>
                      <div className="grid-right-img" style={{ backgroundImage: `url(${DLyDni})`}}></div>
               </Grid>
           </Grid>
       </div>
    )
}

export default WelcomePage;