import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const LandingPageEleven = ()=>{
   return(
       <div style={{height:"325px"}}>
           <Grid container>
             <Grid item lg={2}>

             </Grid>
             <Grid item lg={8} style={{height:"300"}}>
                 <div style={{display:"flex",justifyContent:"space-between",marginTop:"100px"}}>
                     <div><i class="far fa-map fa-w-18 fa-5x"></i></div>
                     <div>
                     <h2>ADDRESS</h2>
                     <h3>New York, United States 795</h3>
                     <h3>South Park Avenue</h3>
                     </div>
                     <div><i class="far fa-envelope fa-w-16 fa-5x"></i></div>
                     <div>
                     <h2>EMAIL</h2>
                     <h3>demolink@mail.org</h3>
                     <h3>Online Support</h3>
                     </div>
                     <div><i class="fas fa-phone fa-w-16 fa-5x"></i></div>
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