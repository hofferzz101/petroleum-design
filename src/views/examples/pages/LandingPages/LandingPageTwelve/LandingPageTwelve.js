import Grid from "@material-ui/core/Grid"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

function LandingPageTwelve(props) {
  return (
    <div style={{height:"960px",backgroundColor:"black"}}>
      <Map google={props.google} zoom={14}>
        <Marker name={"Current location"} />

        <InfoWindow>
          {/* <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div> */}
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: (process.env.MAP_KEY),
})(LandingPageTwelve)
