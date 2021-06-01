import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import "../../../pages/LandingPages/LandingPage.css"



const LandingPageNine = ()=>{
    return(
        <div style={{height:"600px"}}>
            <Grid container>
                <Grid item lg={2}>
                 </Grid>
                 <Grid item lg={8} style={{borderTop:"2px solid lightgray"}}>
                     <div style={{display:"flex",justifyContent:"space-between",marginTop:"150px"}}>
                     <div>
                         <img height="325" src={'https://t4.ftcdn.net/jpg/01/98/48/33/360_F_198483337_7v5JjS1bdK1WrejowgIaErlSXU8skzHh.jpg'}/>
                     </div>
                     <div style={{marginLeft:"150px"}}>
                         <h1>We Are Hiring</h1>
                         <h3>Are you looking for a new career? Come work for us! Explore a career at Gas and Oil, and discover the science to our success. And yours.</h3>
                         <h5>Industrial Mechanic</h5>
                         <h5>Industrial Seamstress</h5>
                         <h5>Machine Operator-Production</h5>
                         <h5>Industrial Electrician</h5>
                         <div>
                         <Button>Contact Us</Button>
                         </div>
                     </div>
                     </div>
                 </Grid>
                 <Grid item lg={2}>
                 </Grid>
            </Grid>
        </div>
    )
}

export default LandingPageNine;