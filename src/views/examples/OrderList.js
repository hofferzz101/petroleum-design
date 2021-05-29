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
import React, { useState, useEffect } from "react"
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

import QRCode from "react-qr-code"

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

const OrderList = props => {
  const { buttonLabel, className } = props

  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

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

  const [confirmationData, setconfirmationData] = useState([])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Petroleum_Item"))
    setconfirmationData(data)
  }, [])

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
                <b>Order List</b>
                <br />
                <Table bordered className="mt-2 mb-3">
                  <thead>
                    <tr>
                      <th>Order No</th>
                      <th>Created At</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {confirmationData
                      ? confirmationData.map(item => (
                          <tr>
                            <td>{item["order_number"]}</td>
                            <td>{item["created date"]}</td>
                            <td>
                              <Button
                                onClick={toggle}
                                color="primary"
                                variant="contained"
                              >
                                Generate QR Code
                              </Button>
                            </td>

                            <Modal isOpen={modal} toggle={toggle}>
                              <ModalHeader toggle={toggle}>
                                Order no: {item["order_number"]}
                              </ModalHeader>
                              <ModalBody style={{ textAlign: "center" }}>
                                <QRCode
                                  size={128}
                                  value={item["order_number"].toString()}
                                />
                              </ModalBody>
                            </Modal>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default OrderList
