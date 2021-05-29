import Grid from '@material-ui/core/Grid';
import "./LandingPageThree.css";
import { Button } from '@material-ui/core';




const LandingPageThree = ()=>{
    return(
        <div className="parallax">
       
         <Grid container>
            <Grid item lg={2}>

            </Grid>
            <Grid item lg={2}>
              <div className="first-info-div">
                  <h5 className="first-info-div-topText">OUR SERVICES</h5>
                  <h1 className="first-info-div-bottomText">Our mission is to sustainably provide the world with the energy it needs.</h1>
                  <Button color="primary" style={{color:"white",backgroundColor:"blue",height:"60px",width:"180px",marginTop:'10%'}}>Contact Us</Button>
              </div>
           </Grid>
           <Grid item lg={2}>
              <div className="second-info-div">
                <div className="second-info-div-top">
                <h1 className="second-info-div-top-Topicon">Icon</h1>
                <h2 className="second-info-div-top-topText">Pipeline Services</h2>
                <h5 className="second-info-div-top-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
                <div className="second-info-div-bottom">
                <h1 className="second-info-div-bottom-bottomicon">Icon</h1>
                <h2 className="second-info-div-bottom-topText">Pipeline Services</h2>
                <h5 className="second-info-div-bottom-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
              </div>
            </Grid>
            <Grid item lg={2}>
             <div className="third-info-div">
             <div className="third-info-div-top">
                <h1 className="third-info-div-top-Topicon">Icon</h1>
                <h2 className="third-info-div-top-topText">Pipeline Services</h2>
                <h5 className="third-info-div-top-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
                <div className="third-info-div-bottom">
                <h1  className="third-info-div-bottom-bottomicon">Icon</h1>
                <h2  className="third-info-div-bottom-topText">Pipeline Services</h2>
                <h5  className="third-info-div-bottom-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
             </div>
            </Grid>
            <Grid item lg={2}>
             <div className="fourth-info-div">
             <div className="fourth-info-div-top">
                <h1 className="fourth-info-div-top-Topicon">Icon</h1>
                <h2 className="fourth-info-div-top-topText">Pipeline Services</h2>
                <h5 className="fourth-info-div-top-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
                <div className="fourth-info-div-bottom">
                <h1 className="fourth-info-div-bottom-bottomicon">Icon</h1>
                <h2 className="fourth-info-div-bottom-topText">Pipeline Services</h2>
                <h5 className="fourth-info-div-bottom-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
            </div>
           </Grid>
           <Grid item lg={2}>

            </Grid>
         </Grid>
         </div>
    )
}

export default LandingPageThree;