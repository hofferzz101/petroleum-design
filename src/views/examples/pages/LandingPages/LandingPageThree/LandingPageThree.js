import Grid from '@material-ui/core/Grid';
import "./LandingPageThree.css";
import { Button } from '@material-ui/core';
import CustomButton from '../button/Button'



const LandingPageThree = ()=>{
    return(
        <div className="parallax" id="services">
         
         <Grid container>
            <Grid item lg={2}>

            </Grid>
            <Grid item lg={2}>
              <div className="first-info-div">
                  <h5 className="first-info-div-topText">OUR SERVICES</h5>
                  <h1 className="first-info-div-bottomText">Our mission is to sustainably provide the world with the energy it needs.</h1>
                  <div style={{paddingTop:"40px"}}>
                  <CustomButton/>
                  </div>
                  {/* <Button className="button-change" color="primary" style={{color:"white",backgroundColor:"blue",height:"60px",width:"180px",marginTop:'10%'}}>Contact Us</Button> */}
              </div>
           </Grid>
           <Grid item lg={2}>
              <div className="second-info-div">
                <div className="second-info-div-top">
                <img src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-icon01.png'}/>
                <h2 className="second-info-div-top-topText">Pipeline Services</h2>
                <h5 className="second-info-div-top-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
                <div className="second-info-div-bottom">
                <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-icon02.png"}/>
                <h2 className="second-info-div-bottom-topText">Pipeline Services</h2>
                <h5 className="second-info-div-bottom-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
              </div>
            </Grid>
            <Grid item lg={2}>
             <div className="third-info-div">
             <div className="third-info-div-top">
                <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-icon05.png"}/>
                <h2 className="third-info-div-top-topText">Pipeline Services</h2>
                <h5 className="third-info-div-top-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
                <div className="third-info-div-bottom">
                <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-icon04.png"}/>
                <h2  className="third-info-div-bottom-topText">Pipeline Services</h2>
                <h5  className="third-info-div-bottom-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
             </div>
            </Grid>
            <Grid item lg={2}>
             <div className="fourth-info-div">
             <div className="fourth-info-div-top">
                <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-icon03.png"}/>
                <h2 className="fourth-info-div-top-topText">Pipeline Services</h2>
                <h5 className="fourth-info-div-top-bottomText">Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…</h5>
                </div>
                <div className="fourth-info-div-bottom">
                <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-icon06.png"}/>
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