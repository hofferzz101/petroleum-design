import Grid from '@material-ui/core/Grid';
import "./LandingPageTen.css";
import { Button } from '@material-ui/core';
import CustomButton from '../button/Button';


const LandingPageTen = ()=>{
    return(
        
       <div className="parallax-bottom" id="contact">

         <Grid container>
           <Grid item lg={2}>
           </Grid>
           <Grid item lg={8}>
               <div style={{marginTop:"9%"}}>
               <h4 style={{color:"#0590FF"}}>NEWSLETTER</h4>
               <h1 style={{color:"white"}}>Subscribe to our newsletters to receive</h1>
               <h1 style={{color:"white"}}>latest news and updates</h1>
               <div style={{display:"flex",flexDirection:"column"}}>
               <input  type="email" placeholder="Enter your email *" style={{height:"60px",width:"300px"}} type="text"/>
               <div style={{paddingTop:"20px"}}>
               <CustomButton/>
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


export default LandingPageTen