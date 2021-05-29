import Grid from '@material-ui/core/Grid';
import "./LandingPageEight.css";


const LandingPageEight = ()=>{
    return(
      <div style={{height:"925px"}}>

       <Grid container>
        <Grid item lg={2}>
        </Grid>

        <Grid item lg={8}>
            <div style={{marginTop:"135px"}}>
            <h4 style={{color:"blue"}}>OUR EXPERTISE</h4>
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
            <div style={{width:"275px",height:"550px"}}>
                <img width="275px" src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}/>
                <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>
            <div style={{width:"275px",height:"550px"}}>
                <img width="275px" src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}/>
                <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>
            <div style={{width:"275px",height:"550px"}}>
                <img width="275px" src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}/>
                <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>
            <div style={{width:"275px",height:"550px"}}>
                <img width="275px" src={'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'}/>
                <h2 style={{marginTop:"10px"}}>Daniel Jones</h2>
                <h4 style={{color:"orange"}}>CEO</h4>
                <h5>Helps chemicals and oil and gas clients on a broad range of issues related to business and operating model.</h5>
            </div>
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