/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js"
import Profile from "views/examples/Profile.js"
import Maps from "views/examples/Maps.js"
import Register from "views/examples/Register.js"
import Login from "views/examples/Login.js"
import Icons from "views/examples/Icons.js"

import HaulerPortal from "views/examples/Tables.js"
import WholeSaler from "views/examples/WholeSaler"
import Retailer from "views/examples/Retailer"
import Pricing from "views/examples/pricing"
import Orders from "views/examples/Order"
import User from "views/examples/User"
import OrderConformation from "views/examples/OrderConformation"

var routes = [
  {
    path: "/index",
    name: "Hauler Portal",
    icon: "ni ni-tv-2 text-primary",
    component: HaulerPortal,
    layout: "/admin",
  },
  {
    path: "/whole-saler",
    name: "Wholesaler Portal",
    icon: "ni ni-tv-2 text-primary",
    component: WholeSaler,
    layout: "/admin",
  },
  {
    path: "/retailer-portal",
    name: "Retailer Portal",
    icon: "ni ni-tv-2 text-primary",
    component: Retailer,
    layout: "/admin",
  },
  {
    path: "/pricing",
    name: "Pricing",
    icon: "ni ni-tv-2 text-primary",
    component: Pricing,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-tv-2 text-primary",
    component: Orders,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User",
    icon: "ni ni-tv-2 text-primary",
    component: User,
    layout: "/admin",
  },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },

  {
    path: "/order-conformation",
    // name: "User",
    // icon: "ni ni-tv-2 text-primary",
    component: OrderConformation,
    layout: "/admin",
  },
]

export default routes
