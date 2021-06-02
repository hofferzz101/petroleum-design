import Grid from '@material-ui/core/Grid';
import TLBfGj from "../../../../../TLBfGj.jpeg"

const TechnologyPage = ()=>{
    return(
        <div style={{height:"1300px"}}>
           <Grid container style={{paddingTop:"120px"}}>
             <Grid item lg={3}>
             </Grid>
             <Grid item lg={6}>
                 <img width="100%" height="525px" src={TLBfGj}/>
                 <div style={{height:"540px",backgroundColor:"#F7F7F7",marginTop:"20px",textAlign:"center",paddingRight:"50px",paddingLeft:"50px"}}>
                     <h1 style={{fontSize:"35px",color:"#755edb",paddingTop:"50px"}}>OUR TECHNOLOGY</h1>
                     <h2 style={{fontWeight:"lighter",paddingTop:"10px",paddingBottom:"10px"}}>Easy. Fast. Secure.</h2>
                     <h4 style={{fontWeight:"lighter",lineHeight:"1.6"}}>Tandem’s patent-pending solution utilizes a canonical model to upload orders via an integration layer to generate a QR on your driver’s order ticket.
                          None of your current processes change. Working in tandem with terminals, drivers will have the ability to scan their order tickets rather than type
                          them in manually. Tandem is a cloud-based solution, providing the highest standards of data security and ensuring that transactional data is stored
                          securely.
                    </h4>
                    <h4 style={{fontWeight:"lighter",lineHeight:"1.6"}}>Adding to its core solution, Tandem will operate as a blockchain network, built off Hyperledger fabric. Hyperledger fabric is typically used in an 
                        enterprise setting between multiple businesses, capturing an immutable distributed ledger of transactions that reduces the risks of fraud and manipulation
                         while bolstering informational security and facilitating financial transactions/ reconciliations. By reducing paperwork and errors,
                          blockchain helps significantly reduce overhead and transaction costs without the need for third parties or middlemen to verify transactions. 
                          All data is invisible to members of the network who are not granted permissions to access it and no competitive data is shared.
                    </h4>
                 </div>
             </Grid>
             <Grid item lg={3}>
             </Grid>
           </Grid>
        </div>
    )
}

export default TechnologyPage 