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
import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
// reactstrap components
import {
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Badge,
  Card,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  Table,
  PaginationLink,
  Progress,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableFooter from "@material-ui/core/TableFooter"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import IconButton from "@material-ui/core/IconButton"
import FirstPageIcon from "@material-ui/icons/FirstPage"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import LastPageIcon from "@material-ui/icons/LastPage"
// core components
import Header from "components/Headers/Header.js"
import moment from "moment"
import { Link } from "react-router-dom"

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}))

function TablePaginationActions(props) {
  const classes = useStyles1()
  const theme = useTheme()
  const { count, page, rowsPerPage, onChangePage } = props

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0)
  }

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1)
  }

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1)
  }

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
})

const OrderConformation = props => {
  const { buttonLabel, className } = props

  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const rows = [
    {
      name: "Alex",
      email: "alex@gmail.com",
      role: "Author",
    },
    {
      name: "John",
      email: "John@gmail.com",
      role: "Hauler",
    },
  ]

  const data = [
    {
      lineNumber: "John Smith",
      product: "",
      rackLocation: "London",
      qualityOrdered: "3,000",
      qualityDelivered: "5,700",
      freightTicket: "123456789",
      ancillaryFees: "23",
      totalCost: "234,565",
      status: "Scheduled",
      alerts: "None",
    },
    {
      lineNumber: "Alex Jander",
      product: "Mid Gas",
      rackLocation: "London",
      qualityOrdered: "2,500",
      qualityDelivered: "12,000",
      freightTicket: "123456789",
      ancillaryFees: "43",
      totalCost: "234,565",
      status: "Scheduled",
      alerts: "None",
    },
  ]

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRowsData =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  var d = new Date()
  var n = d.getTime()

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow p-2">
              <div className="m-3 container">
                <b>Delivery Station:</b> 79 River St. Chicago, IL
                <br />
                <b className="mt-3">Order Details:</b>
                <Table bordered className="mt-2">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quality (gal)</th>
                      <th>Price (gal)</th>
                      <th>Total Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Unleaded Gasoline</td>
                      <td>5,000</td>
                      <td>2,73</td>
                      <td>12,34</td>
                    </tr>
                    <tr>
                      <td>Midgrade Gasoline</td>
                      <td>2,000</td>
                      <td>2.23</td>
                      <td>11,150</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Total/Average</b>
                      </td>
                      <td>
                        <b>7,000</b>
                      </td>
                      <td>
                        <b>4.93</b>
                      </td>
                      <td>
                        <b>23,150</b>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <b>Rack Location: </b> Exxon Chicago <br/>
                <b>Delivery Window: </b> Late Afternoon 06:00 pm - 11:59 pm <br/>
                <b>PO Number: </b> 0896-592-87 <br/>
                <b>Notes: </b> Please call drew upon arrival (305) 587-0817 <br/>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default OrderConformation
