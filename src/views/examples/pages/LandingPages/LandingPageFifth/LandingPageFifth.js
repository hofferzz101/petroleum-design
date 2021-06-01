import Grid from '@material-ui/core/Grid';
import "./LandingPageFifth.css"


const LandingPageFifth = ()=>{
  return(
     <Grid container id="counters">
         <Grid item lg={7}>
             <div className="left-div-main">
             <img style={{height:"500px",width:"100%"}} src={'https://image.freepik.com/free-photo/aerial-top-view-oil-gas-chemical-tank-with-oil-refinery-plant-background-twilight_35024-84.jpg'}/>
             </div>
         </Grid>
         <Grid item lg={5}>
            <div className="right-div-main">

              <div className="right-div-main-top">
               <div className="right-div-main-top-subwrapper">
               <h1 className="right-div-main-top-heading-top-left">10</h1>
               <p className="right-div-main-top-paragraph-top-left">Offices Worldwide</p>
               </div>
               <div className="right-div-main-top-subwrapper">
               <h1  className="right-div-main-top-heading-bottom-left">22</h1>
               <p  className="right-div-main-top-paragraph-bottom-left">Awards and Recognitions</p>
               </div>
             </div>

             <div className="right-div-main-bottom">
               <div className="right-div-main-top-subwrapper">
               <h1 className='right-div-main-bottom-heading-top'>280</h1>
               <p className='right-div-main-bottom-paragraph-top'>Employees</p>
               </div>
               <div className="right-div-main-top-subwrapper">
               <h1 className='right-div-main-bottom-heading-bottom'>5110</h1>
               <p className='right-div-main-bottom-paragraph-bottom'>Satisfied Clients</p>
               </div>
             </div>
            </div>
         </Grid>
     </Grid>
  )
}

export default LandingPageFifth;
