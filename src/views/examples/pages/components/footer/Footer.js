import Grid from '@material-ui/core/Grid';



const Footer = ()=>{
    return(
        <div style={{height:"475px",display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
           <div style={{display:"flex",flexDirection:"column",width:"400px",alignItems:"center"}}>
           <div style={{marginBottom:"30px"}}>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-twitter" style={{paddingLeft:"20px",paddingRight:"20px"}}></i>
           <i className="fab fa-linkedin-in"></i>
           </div>
           <h5 style={{fontWeight:"thinner",marginBottom:"20px"}}>©2021 by Tandem. Proudly created with Wix.com</h5>
           </div>
        </div>
    )
}


export default Footer

