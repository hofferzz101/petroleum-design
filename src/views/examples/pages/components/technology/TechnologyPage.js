import Grid from '@material-ui/core/Grid';
import TLBfGj from "../../../../../TLBfGj.jpeg";
import './TechnologyPage.css'

const TechnologyPage = ()=>{
    return(
        <div className="main-div-tech">
           <Grid container lassName="main-grid-tech">
             <Grid item lg={3}>
             </Grid>
             <Grid item lg={6}>
                 <img className="img-tech" src={TLBfGj}/>
                 <div className="grid-div-tech">
                     <h1 className="grid-div-tech-heading">OUR TECHNOLOGY</h1>
                     <h2 className="grid-div-tech-heading2">Easy. Fast. Secure.</h2>
                     <h4 className="grid-div-tech-para1">Tandem’s patent-pending solution utilizes a canonical model to upload orders via an integration layer to generate a QR on your driver’s order ticket.
                          None of your current processes change. Working in tandem with terminals, drivers will have the ability to scan their order tickets rather than type
                          them in manually. Tandem is a cloud-based solution, providing the highest standards of data security and ensuring that transactional data is stored
                          securely.
                    </h4>
                    <h4 className="grid-div-tech-para2">Adding to its core solution, Tandem will operate as a blockchain network, built off Hyperledger fabric. Hyperledger fabric is typically used in an 
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