import Grid from "@material-ui/core/Grid"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

function LandingPageTwelve(props) {
  return (
    <div>
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
  apiKey: ("AIzaSyCZQdWZWsNyakL30EbvVherj04c9HcqFc8"),
})(LandingPageTwelve)
