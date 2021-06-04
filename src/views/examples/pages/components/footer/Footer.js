import Grid from '@material-ui/core/Grid';
import './Footer.css';



const Footer = ()=>{
    return(
        <div className="main-div-footer">
           <div className="inner-div-footer">
           <div className="icon-div-footer">
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-twitter" style={{paddingLeft:"20px",paddingRight:"20px"}}></i>
           <i className="fab fa-linkedin-in"></i>
           </div>
           <h5 className="footer-text" style={{fontWeight:"thinner",marginBottom:"20px"}}>©2021 by Tandem. Proudly created with Wix.com</h5>
           </div>
        </div>
    )
}


export default Footer

