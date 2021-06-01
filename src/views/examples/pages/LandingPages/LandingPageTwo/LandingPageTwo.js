import Grid from '@material-ui/core/Grid';
import './LandingPageTwo.css'


const LandingPageTwo = ()=>{
    return (
       <div id="about-us">
         <Grid container>
             <Grid item lg={6}>
                <div className="main-div-left">
                   <h1 className="main-div-left-text-top">We are the biggest company in the world</h1>
                   <h3 className="main-div-left-text-bottom">We help companies create and improve industry products and services through long lasting and mutually rewarding relationships.</h3>
                   <div style={{paddingLeft:"25%",paddingTop:"25px"}}>
                   <div style={{width:"650px",display:"flex",justifyContent:"space-evenly"}}>
                      <img style={{height:"auto"}} src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img01.png"}/>
                      <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img02.png"}/>
                      <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img03.png"}/>
                      <img src={"https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img04.png"}/>
                   </div>
                   </div>
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
