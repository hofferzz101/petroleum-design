import Grid from '@material-ui/core/Grid';
import "./LandingPageSixth.css"
import { Button } from 'reactstrap';


const LandingPageSixth = ()=>{
    return (
        <div style={{height:"950px"}} id="pricing">
        <Grid container>
            <Grid item lg={12} md={12} sm={12}>
                <div className="top-div">
                    <h4 className="top-div-para">PRICE TABLES</h4>
                    <h1>Show Your Pricing Plans</h1>
                </div>
            </Grid>
         </Grid>

        <Grid container>
            <Grid item lg={12}>
                <div className="bottom-div-cards">

                    <div className="bottom-div-cardLeft">
                        <div className="card-left">
                          <div style={{paddingTop:"18px",color:"white"}}><span style={{fontSize:"30px"}}>$</span>
                          <span style={{fontSize:"65px"}}>100</span>
                          <span style={{fontSize:"25px"}}> / a month</span>
                          </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:'center',marginTop:'40px'}}>
                          <h3>One hour of consultations</h3>
                          <h3>Work permits for aliens</h3>
                          <h3>Drawing up business plans</h3>
                          <h3>Analysis of existing</h3>
                        </div>
                        <div className="bottom-div-cardLeft-button-div" style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
                        <Button style={{width:"225px",height:"60px",border:"2px solid #092840",borderRadius: "0"}} outline>BUY NOW</Button>
                        </div>
                      
                      
                    </div>
                    <div className="bottom-div-cardCenter">
                     <div className="card-center">
                          <div style={{paddingTop:"25px",color:"white"}}><span style={{fontSize:"30px"}}>$</span>
                          <span style={{fontSize:"65px"}}>100</span>
                          <span style={{fontSize:"25px"}}> / a month</span>
                          </div>
                        </div>

                    <div style={{display:"flex",flexDirection:"column",alignItems:'center',marginTop:'40px'}}>
                          <h3>One hour of consultations</h3>
                          <h3>Work permits for aliens</h3>
                          <h3>Drawing up business plans</h3>
                          <h3>Analysis of existing</h3>
                      </div>
                      <div className="bottom-div-cardCenter-button-div" style={{display:"flex",justifyContent:"center",paddingTop:"60px"}}>
                      <Button style={{width:"225px",height:"60px",border:"2px solid #0590FF",borderRadius: "0"}} outline color="primary">BUY NOW</Button>
                      </div>
                    </div>
                    <div className="bottom-div-cardRight">
                        
                    <div className="card-right">
                          <div style={{paddingTop:"18px",color:"white"}}><span style={{fontSize:"30px"}}>$</span>
                          <span style={{fontSize:"65px"}}>100</span>
                          <span style={{fontSize:"25px"}}> / a month</span>
                          </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",alignItems:'center',marginTop:'40px'}}>
                          <h3>One hour of consultations</h3>
                          <h3>Work permits for aliens</h3>
                          <h3>Drawing up business plans</h3>
                          <h3>Analysis of existing</h3>
                        </div>
                        <div className="bottom-div-cardLeft-button-div" style={{display:"flex",justifyContent:"center",paddingTop:"30px"}}>
                        <Button style={{width:"225px",height:"60px",border:"2px solid #092840",borderRadius: "0"}} outline>BUY NOW</Button>
                        </div>
                    </div>

                </div>
            </Grid>
        </Grid>
        </div>
    )
}

export default LandingPageSixth;