import Grid from '@material-ui/core/Grid';
import "./GetInTouchPage.css"


const GetInTouch = ()=>{
    return(
        <div className="main-div-getintouch">
           <Grid container>
            
             <Grid item lg={8} md={5} sm={12} xs={12} className="inner-div-getintouch">
                 <h1 className="top-grid-heading-getintouch">GET IN TOUCH</h1>
             </Grid>
             <Grid item lg={4} md={7} sm={12} xs={12}>
                 <div className="bottom-grid-div-getintouch">

                    <div className="input-div">
                    <h4 className="formfeild-getintouch">Name *</h4>
                    <input className="input-style" type="text" placeholder="Enter Your Name"/>
                    </div>
                    <div className="input-div">
                    <h4 className="formfeild-getintouch" style={{fontWeight:"lighter"}}>Email *</h4>
                    <input className="input-style" type="text" placeholder="Enter Your Name"/>
                    </div>
                 </div>

                 <div className="bottom-grid-div-getintouch">
                     <div className="input-div">
                     <h4 className="formfeild-getintouch" style={{fontWeight:"lighter"}}>Phone</h4>
                     <input className="input-style" type="text" placeholder="Enter Your Name"/>
                     </div>
                     <div className="input-div">
                     <h4 className="formfeild-getintouch" style={{fontWeight:"lighter"}}>Address</h4>
                      <input className="input-style" type="text" placeholder="Enter Your Name"/>
                    </div>
                  <div>
                  
                </div>
                  
                </div>
                   <div className="bottom-grid-div-getintouch-subject">
                     <h4 className="formfeild-getintouch" style={{fontWeight:"lighter"}}>Subject</h4>
                     <input className="input-style-subject" type="text" placeholder="Type the subject"/>
                   </div>
                   <div className="bottom-grid-div-getintouch-message">
                     <h4 className="formfeild-getintouch" style={{fontWeight:"lighter"}}>Message</h4>
                       <textarea className="getintouch-textarea" rows="5" cols="54" placeholder="Type your message here"></textarea>
                   </div>
                   <div className="btn-div">
                   <button className="btn-style">Submit</button>
                   </div>
             </Grid>
            
           </Grid>
           
        </div>
    )
}

export default GetInTouch