import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import "./LandingPageSeventh.css"



const LandingPageSeventh = ()=>{
    return(
       <div style={{height:"850px"}}>
         <Grid container>
           <Grid item lg={6}>
                <div style={{backgroundImage:`url("https://dneegypt.nyc3.digitaloceanspaces.com/2019/05/OilRig.jpeg")`,backgroundSize:"cover",height:"100%",opacity:"0.9"}}>
                    <div style={{height:"100%",padding:"35px"}}>
                        <div style={{height:"100%"}}>
                       <div style={{backgroundColor:"#000033",height:"100%",opacity:"0.8"}}>
                           
                           <div style={{display:"flex",justifyContent:"center",paddingTop:"55px"}}>
                            
                            <div style={{height:"25%",width:"40%",textAlign:"center"}}>
                                <img style={{opacity:1}} src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img05.png'}/>
                                <h2 className="left-div-link"><Link style={{color:"white"}}>Omv offshore Bulgaria</Link></h2>
                                <h3 style={{color:"white"}}>Omv offshore Bulgaria OMV is an integrated, international oil and gas company. We have been cooperating for a decade.</h3>
                            </div>
                            <div style={{height:"25%",width:"40%",textAlign:"center"}}>
                                <img style={{opacity:1}} src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img06.png'}/>
                                <h2  className="left-div-link" style={{color:"white"}}><Link style={{color:"white"}}>Repsol Bulgaria</Link></h2>
                                <h3 style={{color:"white"}}>Our company is partnering with Repsol in the joint operation of the Khan Asparuh exploration project.</h3>
                            </div>
                            </div>

                            <div style={{display:"flex",justifyContent:"center",paddingTop:"60px"}}>
                            <div style={{height:"25%",width:"40%",textAlign:"center"}}>
                                <img style={{opacity:1}} src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img07.png'}/>
                                <h2  className="left-div-link" style={{color:"white"}}><Link style={{color:"white"}}>University of Mining and Geology</Link></h2>
                                <h3 style={{color:"white"}}>Wesigned an agreement with the University for strategic partnership in education, research, and innovation</h3>
                            </div>
                            <div style={{height:"25%",width:"40%",textAlign:"center"}}>
                                <img style={{opacity:1}} src={'https://template67969.motopreview.com/mt-demo/67900/67969/mt-content/uploads/2018/07/mt-1524-partners-img08.png'}/>
                                <h2  className="left-div-link" style={{color:"white"}}><Link style={{color:"white"}}>Nigerian National Petroleum Corporation</Link></h2>
                                <h3 style={{color:"white"}}>NNPC is the state oil corporation which was established on April 1, 1977, and is partnering with us.</h3>
                            </div>
                            </div>
                            
                         </div>
                            
                       </div>
                    </div>
                </div>
           </Grid>
           <Grid item lg={6}>
             <div style={{display:"flex",flexDirection:"column",paddingLeft:"40px",backgroundColor:"#000033"}}>
             <div style={{height:"100px"}}>
                 <h4 style={{color:"skyblue",fontWeight:"bolder",paddingTop:"25px"}}>TESTIMONIAL</h4>
                 <h1 style={{color:"white",fontWeight:"bolder"}}>What Clients Say About Us</h1>
             </div>
             <div style={{display:"flex",flexDirection:"column",height:"650px",justifyContent:"space-evenly",paddingRight:"100px"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                 <div>
                     <img style={{border:"4px solid darkblue"}} height="100px" src={"https://image.shutterstock.com/image-photo/man-poses-passport-photo-260nw-207377266.jpg"}/>
                 </div>
                 <div style={{paddingLeft:"50px"}}>
                     <h1 style={{color:"white",fontWeight:"bolder"}}>Jonathan Anderson</h1>
                     <h4 style={{color:"orange"}}>InvestCorp LTD</h4>
                     <h4 style={{color:"white"}}>“Gas and Oil company representatives has been excellent to work with in the past and I hope that you can find opportunities to experience their customer service, attention to detail, etc. in future sourcing needs.”</h4>
                 </div>
                 </div>


                 <div style={{display:"flex"}}>
                 <div>
                     <img style={{border:"4px solid darkblue"}} height="100px" src={"https://bemaxacademy.com/wp-content/uploads/2016/02/Passport-size-Photo.jpg"}/>
                 </div>
                 <div style={{paddingLeft:"50px"}}>
                     <h1 style={{color:"white",fontWeight:"bolder"}}>Mike Williams</h1>
                     <h4 style={{color:"orange"}}>Oak`s Inc</h4>
                     <h4 style={{color:"white"}}>“Gas and Oil company has been our trusted partner for more than a decade.Thanks to you for all you do in keeping delivery on-time, the quality that meets specifications, and competitive pricing.”</h4>
                 </div>
                 </div>

                 <div style={{display:"flex"}}>
                 <div>
                     <img style={{border:"4px solid darkblue"}} height="100px" src={"https://www.scconline.com/blog/wp-content/uploads/2020/10/Passport-size-image.jpg"}/>
                 </div>
                 <div style={{paddingLeft:"50px"}}>
                     <h1 style={{color:"white",fontWeight:"bolder"}}>Jeoffrey Daniels</h1>
                     <h4 style={{color:"orange"}}>MarkeIn Company</h4>
                     <h4 style={{color:"white"}}>“I am always made to feel like part of their industrial family. Placing orders with Gas and Oil company has always been easy and I have never incurred any negative issues. I am more than satisfied.”</h4>
                 </div>
                 </div>

                
             </div>

             

             

             </div>
           </Grid>
         </Grid>
       </div>
    )
}

export default LandingPageSeventh
