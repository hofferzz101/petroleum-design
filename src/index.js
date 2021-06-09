/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import "assets/plugins/nucleo/css/nucleo.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "assets/scss/argon-dashboard-react.scss"

import AdminLayout from "layouts/Admin.js"
import AuthLayout from "layouts/Auth.js"
import LandingPageFront from "./views/examples/pages/components/LandingPageFront"
import 'antd/dist/antd.css'; 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPageFront} exact />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      {/* <Redirect from="/" to="/auth/login" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
)
