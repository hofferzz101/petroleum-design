import Grid from '@material-ui/core/Grid';
import "./LandingPageEight.css";


const LandingPageEight = ()=>{
    return(
      <div style={{height:"800px"}} id="team">

       <Grid container>
        <Grid item lg={2}>
        </Grid>

        <Grid item lg={8}>
            <div style={{marginTop:"75px"}}>
            <h4 style={{color:"#0590FF"}}>OUR EXPERTISE</h4>
            <h1 style={{marginBottom:"25px"}}>Meet Out Team Of Experts</h1>
            </div>
        </Grid>

        <Grid item lg={2}>
        </Grid>

       </Grid>
          
      <Grid container>
        <Grid item lg={2} md={0}>
        </Grid>
        <Grid item lg={8} md={4}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            


            <div className="container">
            <div className="overlay">
            <img src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt="Avatar" className="image" style={{width:'100%',height:"450px"}}/>
            </div>
            <div className="middle">
            <div className="text"><i className="fas fa-plus"></i></div>
            </div>
            <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>


            <div className="container">
            <div className="overlay">
            <img src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt="Avatar" className="image" style={{width:'100%',height:"450px"}}/>
            </div>
            <div className="middle">
            <div className="text"><i className="fas fa-plus"></i></div>
            </div>
            <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>


            <div className="container">
            <div className="overlay">
            <img src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt="Avatar" className="image" style={{width:'100%',height:"450px"}}/>
            </div>
            <div className="middle">
            <div className="text"><i className="fas fa-plus"></i></div>
            </div>
            <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>


            <div className="container">
            <div className="overlay">
            <img src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt="Avatar" className="image" style={{width:'100%',height:"450px"}}/>
            </div>
            <div className="middle">
            <div className="text"><i className="fas fa-plus"></i></div>
            </div>
            <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>
            
           
           
            {/* <div style={{width:"275px",height:"550px"}}>
                <div className="image-hover">
                <img width="275px" src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}/>
                </div>
                <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div> */}
           
            </div>
        </Grid>
        <Grid item lg={2} md={0}>
        </Grid>
      </Grid>
      <Grid container>
         <Grid item lg={2}>
         </Grid>
         <Grid item lg={8} md={8}>
             
         </Grid>
         <Grid item lg={2}>
         </Grid>
      </Grid>
      </div>
    )
}


export default LandingPageEight