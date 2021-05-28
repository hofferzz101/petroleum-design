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
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  Table,
} from "reactstrap"
import Button from "@material-ui/core/Button"

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

import XLSX from "xlsx"
import { make_cols } from "./excel/MakeColumns"

import { useHistory } from "react-router-dom"
import QRCode from "react-qr-code"

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
  input: {
    display: "none",
  },
})

const Orders = () => {
  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [generateTable, setgenerateTable] = useState([])
  const [excelData, setExcelData] = useState([])
  const [col, setCol] = useState([])
  const [file, setFile] = useState(null)

  const rows = [
    {
      customerNumber: "123456",
      customerName: "Alex",
      orderNumber: "ASD123",
      customerLocation: "London",
      poNumber: "123456789",
      rackLocation: "London",
      orderDate: new Date(),
      deliveryDate: new Date(),
      status: "Delayed",
      alerts: "None",
    },
    {
      customerNumber: "123456",
      customerName: "John",
      orderNumber: "ASD123",
      customerLocation: "London",
      poNumber: "123456789",
      rackLocation: "London",
      orderDate: new Date(),
      deliveryDate: new Date(),
      status: "Completed",
      alerts: "Product Outage",
    },
  ]

  const data = [
    {
      lineNumber: "Exion Philadelphia",
      product: "12.34",
      rackLocation: "23.45",
      qualityOrdered: "3,000",
      qualityDelivered: "5,700",
      freightTicket: "2.343",
      ancillaryFees: "23.45",
      totalCost: "89.87",
      status: "98.9",
      alerts: "12.98",
      ngl: "23.65",
    },
    {
      lineNumber: "BP CHery Hill",
      product: "12.4",
      rackLocation: "3.45",
      qualityOrdered: "3,400",
      qualityDelivered: "5,760",
      freightTicket: "2.33",
      ancillaryFees: "3.4",
      totalCost: "8.8",
      status: "9.9",
      alerts: "1.98",
      ngl: "23.5",
    },
  ]

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

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

  const history = useHistory()

  const [state, setstate] = useState("gal")
  const [phoneNumber, setphoneNumber] = useState("0896-5962-87")
  const [message, setmessage] = useState(
    "Please call drew upon arrival (305) 587-0817"
  )

  // upload excel file and set into state
  const handleChange = e => {
    const files = e.target.files
    if (files && files[0]) {
      handleFile(files[0])
      setFile(files[0])
    }
  }

  // convert excel into json
  const handleFile = uploadedFile => {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader()
    const rABS = !!reader.readAsBinaryString

    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        bookVBA: true,
      })
      /* Get first worksheet */
      const wsname = wb.SheetNames[0]
      const ws = wb.Sheets[wsname]
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws)
      /* Update state */
      setExcelData(data)
      setCol(make_cols(ws["!ref"]))
      // this.setState({ data: data, cols: make_cols(ws["!ref"]) }, () => {
      //   console.log(JSON.stringify(this.state.data, null, 2))
      // })
    }

    if (rABS) {
      reader.readAsBinaryString(uploadedFile)
    } else {
      reader.readAsArrayBuffer(uploadedFile)
    }
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Petroleum_Item"))
    if (data) setgenerateTable(data)

    localStorage.setItem("Petroleum_Item", JSON.stringify(excelData, null, 2))
  }, [excelData, data])
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <Form className="mt-4 mb-4">
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <FormGroup>
                      <Label for="exampleSelectMulti">Location</Label>
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                      >
                        <option>Philadelphia PA</option>
                        <option>Location 2</option>
                        <option>Location 3</option>
                        <option>Location 4</option>
                        <option>Location 2</option>
                      </Input>
                    </FormGroup>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-8" />
                  <div className="col-md-3">
                    <input
                      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      className={classes.input}
                      id="contained-button-file"
                      type="file"
                      onChange={handleChange}
                    />
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        color="primary"
                        component="span"
                      >
                        Upload CSV
                      </Button>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-6">
                    <Table>
                      <thead>
                        <tr>
                          <th>Tank / Product</th>
                          <th>Citgo Lemont</th>
                          <th>Exxone Chicago</th>
                          <th>Quality Desired</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tank 01 - Clear Deisal</td>
                          <td>2.47 / gal</td>
                          <td>2.32 / gal</td>
                          <td>
                            <Input
                              type="text"
                              name="email1"
                              value={state}
                              onChange={e => setstate(e.target.value)}
                              placeholder="with a placeholder"
                            />
                          </td>
                          <td>
                            <Button color="primary" variant="contained">
                              Generate QR Code
                            </Button>
                          </td>
                        </tr>
                        {
                          generateTable.length
                            ? generateTable.map((item, i) => (
                                <tr key={i}>
                                  <td>{item["Company_Name"]}</td>
                                  <td>{item["Company_Email"]}</td>
                                  <td>{item["STN"]}</td>
                                  <td>{item["NTN"]}</td>
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
                                      {item["Company_Name"]}
                                    </ModalHeader>
                                    <ModalBody style={{textAlign: "center"}}>
                                      <QRCode size={128} value={item.Company_Name} />
                                    </ModalBody>
                                  </Modal>
                                </tr>
                              ))
                            : null
                          // <h1>No Data</h1>
                        }
                      </tbody>
                    </Table>
                  </div>
                </div>
                {/* <QRCode value="hey" /> */}

                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-3">
                    <Label>Delivery Date</Label>
                    <Input type="date" placeholder="with a placeholder" />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-3" />
                  <div className="col-md-3">
                    <FormGroup>
                      <Label>Delivery Time Preference</Label>
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                      >
                        <option>Early Morning: 12:00 am - 05:59 am</option>
                        <option>Late Morning: 06:00 am - 11:59 am</option>
                        <option>Early Afternoon: 12:00 pm - 05:59 pm</option>
                        <option>Late Afternoon: 06:00 pm - 11:59 pm</option>
                      </Input>
                    </FormGroup>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-3">
                    <Label>Additional Information</Label>
                    <FormGroup>
                      <Input
                        type="text"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        value={phoneNumber}
                        onChange={e => setphoneNumber(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        value={message}
                        onChange={e => setmessage(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5" />
                  <div className="col-md-4">
                    <Button
                      color="primary"
                      onClick={() => history.push("/admin/order-conformation")}
                      type="button"
                      variant="contained"
                      className="btn-block w-50"
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
        </Row>

        <Row>
          <div className="col mt-3">
            <Card className="shadow"></Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  )
}

export default Orders
