import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import "./LandingPageOne.css"


function LandingPageOne() {
    return (
        <div>
          
            <div className="main-div" style={{ backgroundImage: `url("https://www.hydrocarbons-technology.com/wp-content/uploads/sites/9/2020/07/LindseyRef.jpg")`,   
             height: '850px',backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            
             <Grid container>
               <Grid item lg={6} md={6}>
                <div className="top-div-left">
                    <div style={{display:"flex"}}>
                    <div>
                    <img src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-logo-icon.png'}/>
                    </div>
                    <div style={{paddingLeft:"25px"}}>
                      <h2 className="top-text-div-top">GAS AND OIL</h2>
                      <h3 className="top-text-div-bottom">COMPANY</h3>
                     </div>
                     </div>
                </div>
                </Grid>
                <Grid item lg={6} md={6}>
                <div className="top-div-right" >
                      <Link className="top-links">ABOUT US</Link>
                      <Link className="top-links">PRICING</Link>
                      <Link className="top-links">CONTACTS</Link>
                      <Link className="top-links">ALL BLOCKS</Link>
                      <Link className="top-links" to="/auth/login">LOGIN</Link>

                 </div>
                </Grid>
             </Grid>

             <Grid container>
              <Grid item lg={12} md={12} sm={12}>
                   <div className="bottom-div">
                      <h4 className="bottm-div-text-one">WELCOME TO OUR COMPANY</h4>
                      <h1 className="bottm-div-text-two">Discover out most</h1>
                      <h1 className="bottm-div-text-three">Successful projects</h1>
                      <h3 className="bottm-div-text-four">To meet the growing worldwide demand for energy while preparing for the future.</h3>
                   </div>
              </Grid>
             </Grid>
            
            </div>
        </div>
    )
}

export default LandingPageOne;
