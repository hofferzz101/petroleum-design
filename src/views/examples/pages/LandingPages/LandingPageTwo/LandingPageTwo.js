import Grid from '@material-ui/core/Grid';
import './LandingPageTwo.css'


const LandingPageTwo = ()=>{
    return (
       <div>
         <Grid container>
             <Grid item lg={6}>
                <div className="main-div-left">
                   <h1 className="main-div-left-text-top">We are the biggest company in the world</h1>
                   <h3 className="main-div-left-text-bottom">We help companies create and improve industry products and services through long lasting and mutually rewarding relationships.</h3>
                </div>
             </Grid>
             <Grid item lg={6}>
               <div className="main-div-right">
                   <div>
                    <img className="main-div-right-img" src="https://justengineeringschools.com/wp-content/uploads/2014/12/Petroleum-Engineer.jpg"/>
                    </div>
               </div>
             </Grid>
         </Grid>
       </div>
    )
}

export default LandingPageTwo
