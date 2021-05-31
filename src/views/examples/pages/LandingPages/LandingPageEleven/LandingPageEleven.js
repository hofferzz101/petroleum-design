import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';



const LandingPageEleven = ()=>{
   return(
       <div style={{height:"325px"}}>
           <Grid container>
             <Grid item lg={2}>

             </Grid>
             <Grid item lg={8} style={{height:"300"}}>
                 <div style={{display:"flex",justifyContent:"space-between",marginTop:"100px",paddingLeft:"50px",paddingRight:"60px"}}>
                     <div><i style={{color:"#0590FF"}} class="far fa-map fa-w-18 fa-3x"></i></div>
                     <div>
                     <h2>ADDRESS</h2>
                     <h3>New York, United States 795</h3>
                     <h3>South Park Avenue</h3>
                     </div>
                     <div><i style={{color:"#0590FF"}} class="far fa-envelope fa-w-16 fa-3x"></i></div>
                     <div>
                     <h2>EMAIL</h2>
                     <h3><Link>demolink@mail.org</Link></h3>
                     <h3>Online Support</h3>
                     </div>
                     <div><i style={{color:"#0590FF"}} class="fas fa-phone fa-w-16 fa-3x"></i></div>
                     <div>
                     <h2>PHONE</h2>
                     <h3>(123) 456-7890</h3>
                     <h3>(123) 456-7891</h3>
                     </div>
                 </div>
             </Grid>
             <Grid item lg={2}>
                 
             </Grid>

             
           </Grid>
       </div>
   )
}

export default LandingPageEleven;