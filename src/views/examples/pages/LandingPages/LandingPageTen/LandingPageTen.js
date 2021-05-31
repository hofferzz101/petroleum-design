import Grid from '@material-ui/core/Grid';
import "./LandingPageTen.css";
import { Button } from '@material-ui/core';


const LandingPageTen = ()=>{
    return(
        
       <div className="parallax-bottom">

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
               <Button style={{color:"white",backgroundColor:"#0590FF",height:"60px",width:"180px",marginTop:"2%"}}>Contact Us</Button>
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