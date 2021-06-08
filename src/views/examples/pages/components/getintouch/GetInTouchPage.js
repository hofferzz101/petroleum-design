import Grid from '@material-ui/core/Grid';
import "./GetInTouchPage.css"


const GetInTouch = ()=>{
    return(
        <div className="main-div-getintouch">
           <Grid container>
             
             <Grid item lg={12} md={12} sm={12} xs={12}>
             <h1 className="top-grid-heading-getintouch">GET IN TOUCH</h1>
              


                <div className="form-div-getintouch">
                  <h4>Name *</h4>
                  <input className="input-div-getintouch" type="text" placeholder="Enter Your Name"/>
                  <h4>Email *</h4>
                  <input className="input-div-getintouch" type="text" placeholder="Enter Your Email"/>
                  <h4>Phone *</h4>
                  <input className="input-div-getintouch" type="number" placeholder="Enter Your Number"/>
                  <h4>Address *</h4>
                  <input className="input-div-getintouch" type="text" placeholder="Enter Your Address"/>
                  <h4>Subject *</h4>
                  <input className="input-div-getintouch" type="text" placeholder="Enter The Subject"/>
                  <h4>Message</h4>
                  <textarea rows="5" cols="54" placeholder="Type your message here"></textarea>
                  <button className="btn-style-getintouch">Submit</button>
                </div>

                 {/* <div className="bottom-grid-div-getintouch">

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
                   </div> */}

                   
             </Grid>
            
           </Grid>
           
        </div>
    )
}

export default GetInTouch