import Grid from '@material-ui/core/Grid';
import vvcuhS from "../../../../../vvcuhS.jpg";
import "./StoryPage.css"
 

const StoryPage = ()=>{
    return(
        <div className="main-div-story">
            <Grid container>
               <Grid item lg={12} md={12} sm={12} xs={12} className="top-grid-div-story">
                  <img className="img-div-story" width="90%" height="100%" src={vvcuhS}/>
                  <div className="img-text-div-story">
                      <span className="img-text-story">OUR STORY</span></div>
               </Grid>
            </Grid>
            
            <Grid container>
                 <Grid item lg={3} >
                 </Grid>
                 <Grid item lg={6} md={12}  className="bottom-grid-div-story">
                     <h3 className="bottom-grid-heading-story">What We Do</h3>
                     <h3 className="bottom-grid-text-story">Tandem is a simple fix to a large-scale problem: Drivers are faced with the responsibility of manually entering order
                          specifications at terminals and mistakes are inevitable. The operational and environmental consequences of these mistakes are immense.</h3>
                     <h3 className="bottom-grid-text-story">Tandem’s solution not only ensures order accuracy at terminals, but also reduces the time it takes a driver to pick up
                          a load by up to 5%. Terminals achieve greater throughput with significantly fewer incidents. Haulers achieve greater order accuracy, 
                          fleet utilization and customer satisfaction. None of your existing processes change except that your drivers no longer h
                          ave to type in their orders and you will have a clean, up-to-date database of all transactions.</h3>
                     <h3 className="bottom-grid-text-story">Tandem will also offer customers to ability to automatically digitize order documents and reconcile transactions in the back end using Optical 
                         Character Recognition (OCR) technology. Free up your back-office staff while reducing paperwork, clutter and those pesky credit and rebills.</h3>
                    <h3 className="bottom-grid-text-story">With a digitized cloud ecosystem of processes and clean data, midstream distribution 
                        stakeholders can reduce overhead and run operations based on real-time information and analysis.</h3>
                        <button className="bottom-grid-btn-story">Contact Us</button>
                 </Grid>
                 <Grid item lg={3} >
                 </Grid>
            </Grid>
        </div>
    )
}

export default StoryPage