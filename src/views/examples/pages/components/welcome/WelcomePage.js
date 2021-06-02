import Grid from '@material-ui/core/Grid';
import DLyDni from "../../../../../DLyDni.jpeg"
import {Link} from "react-router-dom"

const WelcomePage = ()=>{
    return(
       <div style={{height:"875px",overflow:"hidden"}}>
           <div style={{width:"100%",paddingTop:"2%",paddingBottom:"2%",display:"flex",justifyContent:"space-between"}}>
              <div style={{marginLeft:"5%"}}><h1>TANDEM</h1></div>
              <div style={{marginRight:"5%"}}><h4><Link to="/auth/login">Login</Link></h4></div>
           </div>
           
           <Grid container>
               <Grid item lg={6} md={6} sm={12} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <div style={{display:"flex",justifyContent:"center"}}>
                  <div style={{width:"500px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                  <h1 style={{fontSize:"60px",color:"#5d7cea"}}>WELCOME TO TANDEM</h1>
                  <h3 style={{fontFamily:"cursive",fontWeight:"lighter"}}>~90% of all terminal incidents are caused by human error, with 60% of these incidents attributable to faulty order entry. We’re here to change that.</h3>
                  </div>
                  </div>
               </Grid>

               <Grid item lg={6} md={6} sm={12} style={{paddingRight:"60px",paddingLeft:"20px"}}>
                      <div style={{ backgroundImage: `url(${DLyDni})`,width:"100%",height:"650px",backgroundSize:"50% 100%",backgroundAttachment: 'fixed'}}></div>
               </Grid>
           </Grid>
       </div>
    )
}

export default WelcomePage;