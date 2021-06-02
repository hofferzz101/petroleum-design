import Grid from '@material-ui/core/Grid';
import "./GetInTouchPage.css"


const GetInTouch = ()=>{
    return(
        <div style={{height:'1100px',backgroundColor:"#F7F7F7",marginLeft:"75px",marginRight:"75px",paddingTop:"40px"}}>
           <Grid container>
            
             <Grid item lg={8}>
                 <h1 style={{color: "#755edb",fontSize:"40px",textAlign:"center"}}>GET IN TOUCH</h1>
             </Grid>
             <Grid item lg={4}>
                 <div style={{display:"flex"}}>

                    <div className="input-div">
                    <h4 style={{fontWeight:"lighter"}}>Name *</h4>
                    <input className="input-style" type="text" placeholder="Enter Your Name"/>
                    </div>
                    <div className="input-div">
                    <h4 style={{fontWeight:"lighter"}}>Email *</h4>
                    <input className="input-style" type="text" placeholder="Enter Your Name"/>
                    </div>
                 </div>

                 <div style={{display:"flex"}}>
                     <div className="input-div">
                     <h4 style={{fontWeight:"lighter"}}>Phone</h4>
                     <input className="input-style" type="text" placeholder="Enter Your Name"/>
                     </div>
                     <div className="input-div">
                     <h4 style={{fontWeight:"lighter"}}>Address</h4>
                      <input className="input-style" type="text" placeholder="Enter Your Name"/>
                    </div>
                  <div>
                  
                </div>
                  
                </div>
                   <div>
                     <h4 style={{fontWeight:"lighter"}}>Subject</h4>
                     <input className="input-style-subject" type="text" placeholder="Type the subject"/>
                   </div>
                   <div>
                     <h4 style={{fontWeight:"lighter"}}>Message</h4>
                       <textarea rows="5" cols="54" placeholder="Type your message here"></textarea>
                   </div>
                   <button className="btn-style" style={{backgroundColor:"black",color:"white",height:"50px",width:"455px",border:"none",marginTop:"10px"}}>Submit</button>
             </Grid>
            
           </Grid>
           
        </div>
    )
}

export default GetInTouch