import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import CustomButton from '../button/Button';



const LandingPageThirteen = ()=>{
    return (
        <div style={{backgroundColor:"black"}}>
       <Grid container style={{borderBottom:"1px solid lightgray"}}>
          <Grid item lg={2}>
          </Grid>

          <Grid item lg={8}>
              <div style={{display:"flex"}}>
               <div style={{height:"350px",width:"40%",backgroundColor:"black",paddingRight:"100px",paddingTop:"100px"}}>
                   <div style={{display:"flex"}}>
                   <div>
                   <img src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-logo-icon.png'}/>
                   </div>
                   <div style={{paddingLeft:"30px"}}>
                   <h3 style={{color:"white"}}>GAS AND OIL</h3>
                   <h3 style={{color:"white",paddingBottom:"15px"}}>COMPANY</h3>
                   </div>
                   </div>
                   <h4 style={{color:"white"}}>Gas and Oil is a global energy company that is focused on acquiring, exploring and developing large acreage positions of unconventional oil and gas resources.</h4>
                   <div style={{paddingTop:"5px"}}>
                   <i class="fab fa-twitter" style={{color:"white"}}></i>
                   <i class="fab fa-facebook-f" style={{color:"white",paddingLeft:"15px"}}></i>
                   <i class="fab fa-pinterest-p" style={{color:"white",paddingLeft:"15px"}}></i>
                   <i class="fab fa-instagram" style={{color:"white",paddingLeft:"15px"}}></i>
                   <i class="fas fa-wifi" style={{color:"white",paddingLeft:"15px"}}></i>
                   </div>
               </div>

               <div style={{height:"350px",backgroundColor:"linen",width:"30%",backgroundColor:"black",paddingRight:"90px",paddingTop:"100px"}}>
                   <h2 style={{color:"white",paddingBottom:"15px"}}>Contact Us</h2>
                   <div style={{display:"flex"}}>
                   <i class="fab fa-facebook-f" style={{color:"#0590FF",paddingTop:"5px"}}></i>
                   <h4 style={{paddingLeft:"20px",color:"white"}}>New York, United States 795 South Park Avenue</h4>
                   </div>
                   <div style={{display:"flex",paddingTop:"10px"}}>
                   <i class="fas fa-phone-alt" style={{color:"#0590FF"}}></i>
                   <h4 style={{paddingLeft:"20px"}}><Link>(123) 456-7890</Link></h4>
                   </div>
                   <div style={{display:"flex",paddingTop:"10px"}}>
                   <i class="fas fa-envelope" style={{color:"#0590FF"}}></i>
                   <h4 style={{paddingLeft:"20px"}}><Link>demolink@mail.org</Link></h4>
                   </div>
               </div>

               <div style={{height:"350px",backgroundColor:"linen",width:"30%",backgroundColor:"black",paddingTop:"100px"}}>
                   <h2 style={{paddingBottom:"20px",color:"white"}}>Subscribe</h2>
                   <input type="email" placeholder="Enter your email *" style={{height:"60px",width:"250px"}} type="text"/>
                   <div style={{paddingTop:"10px"}}>
                   <CustomButton/>
                   </div>
               </div>
               </div>
          </Grid>

          <Grid item lg={2}>
          </Grid>
       </Grid>

       <Grid container style={{height:"150px",backgroundColor:"black"}}>
          <Grid item lg={2}>
          </Grid>

          <Grid item lg={8}>
              <div style={{paddingTop:"60px"}}>
              <h3 style={{color:"white",fontWeight:"thin",fontFamily:"inherit"}}>Copyright 2019- Gas&Oil Company - All Rights Reserved</h3>
              </div>
          </Grid>

          <Grid item lg={2} >
          </Grid>
       </Grid>
       </div>
    )
}

export default LandingPageThirteen
