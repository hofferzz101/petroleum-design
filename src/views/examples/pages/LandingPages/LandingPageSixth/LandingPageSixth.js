import Grid from '@material-ui/core/Grid';
import "./LandingPageSixth.css"
import { Button } from 'reactstrap';


const LandingPageSixth = ()=>{
    return (
        <div style={{height:"950px"}}>
        <Grid container>
            <Grid item lg={12} md={12} sm={12}>
                <div className="top-div">
                    <p className="top-div-para">PRICE TABLES</p>
                    <h1>Show Your Pricing Plans</h1>
                </div>
            </Grid>
         </Grid>

        <Grid container>
            <Grid item lg={12}>
                <div className="bottom-div-cards">

                    <div className="bottom-div-cardLeft">
                      <div className="bottom-div-cardLeft-innerTop">
                          <h1 style={{color:"white"}}>$</h1>
                          <h1 style={{fontSize:"60px",color:"white"}}>100</h1>
                          <h2 style={{color:"white",marginLeft:"5%",marginTop:"8%"}}> / a month</h2>
                      </div>
                      <div style={{display:"flex",flexDirection:"column",alignItems:'center',marginTop:'40px'}}>
                          <h3>One hour of consultations</h3>
                          <h3>Work permits for aliens</h3>
                          <h3>Drawing up business plans</h3>
                          <h3>Analysis of existing</h3>
                      </div>
                      <div className="bottom-div-cardLeft-button-div" style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
                      <Button style={{width:"225px",height:"60px",border:"2px solid #092840",borderRadius: "0",color:"#092840"}} outline>BUY NOW</Button>
                      </div>
                      
                    </div>
                    <div className="bottom-div-cardCenter">
                    <div className="bottom-div-cardCenter-innerCenter">
                          <h1 style={{color:"white"}}>$</h1>
                          <h1 style={{fontSize:"60px",color:"white"}}>100</h1>
                          <h2 style={{color:"white",marginLeft:"5%",marginTop:"8%"}}> / a month</h2>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:'center',marginTop:'40px'}}>
                          <h3>One hour of consultations</h3>
                          <h3>Work permits for aliens</h3>
                          <h3>Drawing up business plans</h3>
                          <h3>Analysis of existing</h3>
                      </div>
                      <div  style={{display:"flex",justifyContent:"center",paddingTop:"40px"}}>
                      <Button style={{width:"225px",height:"60px",border:"2px solid #0590FF",borderRadius: "0",color:"#0590FF"}} outline color="primary">BUY NOW</Button>
                      </div>
                    </div>
                    <div className="bottom-div-cardRight">
                        
                    <div className="bottom-div-cardLeft-innerBottom">
                          <h1 style={{color:"white"}}>$</h1>
                          <h1 style={{fontSize:"60px",color:"white"}}>350</h1>
                          <h2 style={{color:"white",marginLeft:"5%",marginTop:"8%"}}> / a month</h2>
                      </div>
                      <div style={{display:"flex",flexDirection:"column",alignItems:'center',marginTop:'40px'}}>
                          <h3>One hour of consultations</h3>
                          <h3>Work permits for aliens</h3>
                          <h3>Drawing up business plans</h3>
                          <h3>Analysis of existing</h3>
                      </div>
                      <div style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
                      <Button style={{width:"225px",height:"60px",border:"2px solid #092840",borderRadius: "0",color:"#092840"}} outline color="secondary">BUY NOW</Button>
                      </div>
                    </div>

                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default LandingPageSixth;