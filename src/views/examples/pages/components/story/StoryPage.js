import Grid from '@material-ui/core/Grid';
import vvcuhS from "../../../../../vvcuhS.jpg"
 

const StoryPage = ()=>{
    return(
        <div style={{height:"1400px",backgroundColor:"#F7F7F7"}}>
            <Grid container>
               <Grid item lg={12} style={{textAlign:"center",marginTop:"5%",position:"relative",height:"500px"}}>
                  <img width="90%" height="100%" src={vvcuhS}/>
                  <div style={{position: 'absolute',top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                      <span style={{color:"white",fontSize:"40px"}}>OUR STORY</span></div>
               </Grid>
            </Grid>
            
            <Grid container>
                 <Grid item lg={3}>
                 </Grid>
                 <Grid item lg={6} style={{textAlign:"center",padding:"100px"}}>
                     <h3 style={{paddingBottom:"25px"}}>What We Do</h3>
                     <h3 style={{paddingBottom:"25px",fontWeight: "lighter"}}>Tandem is a simple fix to a large-scale problem: Drivers are faced with the responsibility of manually entering order
                          specifications at terminals and mistakes are inevitable. The operational and environmental consequences of these mistakes are immense.</h3>
                     <h3 style={{paddingBottom:"25px",fontWeight: "lighter"}}>Tandem’s solution not only ensures order accuracy at terminals, but also reduces the time it takes a driver to pick up
                          a load by up to 5%. Terminals achieve greater throughput with significantly fewer incidents. Haulers achieve greater order accuracy, 
                          fleet utilization and customer satisfaction. None of your existing processes change except that your drivers no longer h
                          ave to type in their orders and you will have a clean, up-to-date database of all transactions.</h3>
                     <h3 style={{paddingBottom:"25px",fontWeight: "lighter"}}>Tandem will also offer customers to ability to automatically digitize order documents and reconcile transactions in the back end using Optical 
                         Character Recognition (OCR) technology. Free up your back-office staff while reducing paperwork, clutter and those pesky credit and rebills.</h3>
                    <h3 style={{paddingBottom:"25px",fontWeight: "lighter"}}>With a digitized cloud ecosystem of processes and clean data, midstream distribution 
                        stakeholders can reduce overhead and run operations based on real-time information and analysis.</h3>
                        <button style={{height:'50px',width:"135px",borderRadius:"25px 25px 25px 25px",borderWidth:"0",backgroundColor:"#755edb",color:"white"}}>Contact Us</button>
                 </Grid>
                 <Grid item lg={3}>
                 </Grid>
            </Grid>
        </div>
    )
}

export default StoryPage