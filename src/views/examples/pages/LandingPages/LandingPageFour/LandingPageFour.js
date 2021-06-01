import "./LandingPageFour.css"
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';



const LandingPageFour = ()=>{
    return(
         <Grid container id="counters">
             <Grid item lg={5}>
                <div className="left-div">
                    <h4 className="left-div-textOne">OUR EXPERTISE</h4>
                    <h1 className="left-div-textTwo">Why People Choose Us</h1>
                    <h3 className="left-div-textThree">We develop innovative, efficient and sustainable exploration and production solutions that respond to our future energy challenges.</h3>
                </div>
             </Grid>
             <Grid item lg={7}>
                 
                <div className="right-div">

                    <div className="right-div-line">
                       
                    </div>
                   
                    <div className="right-div-text-left">
                        <h5 className="right-div-text-left-one"><Link>We Are Innovative</Link></h5>
                        <h5 className="right-div-text-left-two"><Link>We Develop And Transform</Link></h5>
                        <h5 className="right-div-text-left-three"><Link>We Are Trade Experts</Link></h5>
                    </div>
                    <div className="right-div-text-right">
                        <h5 className="right-div-text-right-paragraph">To meet the energy needs, we continually innovate to produce sustainable and responsible solutions in oil and gas, solar energy, and bioenergies. Our professionals work to provide the best services to our clients, partners and investors. They all have years of professional experience and high expertise in gas and oil industry.</h5>
                        
                    </div>
                    
                </div>
             </Grid>
         </Grid>
    )
}

export default LandingPageFour;