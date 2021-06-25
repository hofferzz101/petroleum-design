import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap"

import Table from "@material-ui/core/Table"
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
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap"

import { ExportCSV } from "./excel/exportExcel"
import "./pages/Tables.css"
import EditIcon from "@material-ui/icons/Edit"
import ListIcon from "@material-ui/icons/List"
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
})

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
    customerNumber: "123457",
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
  {
    customerNumber: "123457",
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
  {
    customerNumber: "123457",
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
  {
    customerNumber: "123457",
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
    lineNumber: "123456",
    product: "Reg Gas",
    rackLocation: "London",
    qualityOrdered: 3000,
    qualityDelivered: 5700,
    freightTicket: "123456789",
    ancillaryFees: 2300,
    totalCost: 234565,
    status: "Scheduled",
    alerts: "None",
  },
  {
    lineNumber: "098765",
    product: "Mid Gas",
    rackLocation: "London",
    qualityOrdered: 2500,
    qualityDelivered: 12000,
    freightTicket: "123456789",
    ancillaryFees: 4300,
    totalCost: 234565,
    status: "Scheduled",
    alerts: "None",
  },

  {
    lineNumber: "098765",
    product: "Mid Gas",
    rackLocation: "London",
    qualityOrdered: 2500,
    qualityDelivered: 12000,
    freightTicket: "123456789",
    ancillaryFees: 4300,
    totalCost: 234565,
    status: "Scheduled",
    alerts: "None",
  },
  {
    lineNumber: "123456",
    product: "Reg Gas",
    rackLocation: "London",
    qualityOrdered: 3000,
    qualityDelivered: 5700,
    freightTicket: "123456789",
    ancillaryFees: 2300,
    totalCost: 234565,
    status: "Scheduled",
    alerts: "None",
  },
  {
    lineNumber: "098765",
    product: "Mid Gas",
    rackLocation: "London",
    qualityOrdered: 2500,
    qualityDelivered: 12000,
    freightTicket: "123456789",
    ancillaryFees: 10000,
    totalCost: 234565,
    status: "Scheduled",
    alerts: "None",
  },
]

const Tables = () => {
  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [isEdit, setisEdit] = useState(false)
  const [EditObj, setisEditObj] = useState({})

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const handleChange = (flag, item) => {
    if (flag == "edit") {
      setModal(true)
      setisEdit(true)
      setisEditObj(item)
    } else {
      setModal(true)
      setisEdit(false)
    }
  }

  const [CustomerName, setCustomerName] = React.useState("")
  const [filterCustomer, setFilterCustomer] = React.useState(rows)
  const [filterCustomer2, setFilterCustomer2] = React.useState(data)
  const [OrderNumber, setOrderNumber] = React.useState("")
  const [CustomerNumber, setCustomerNumber] = React.useState("")
  const [CustomerLocation, setCustomerLocation] = React.useState("")
  const [POnumber, setPOnumber] = React.useState("")
  const [RackLocation, setRackLocation] = React.useState("")
  const [OrderDate, setOrderDate] = React.useState("")
  const [DiliveryDate, setDiliveryDate] = React.useState("")
  const [DiliveryWindow, setDiliveryWindow] = React.useState("")
  const [Status, setStatus] = React.useState("")
  const [Alert, setAlert] = React.useState("")

  const [LineNumber, setLineNumber] = React.useState("")
  const [Product, setProduct] = React.useState("")
  const [RackLocation2, setRackLocation2] = React.useState("")
  const [QualityOrder, setQualityOrder] = React.useState("")
  const [QualityDelivered, setQualityDelivered] = React.useState("")
  const [FreightTicket, setFreightTicket] = React.useState("")
  const [AncillaryFees, setAncillaryFees] = React.useState("")
  const [TotalCost, setTotalCost] = React.useState("")
  const [Status2, setStatus2] = React.useState("")
  const [Alert2, setAlert2] = React.useState("")

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const [HaulerData, setHaulerData] = useState(rows)
  const [column, setColumn] = useState("")
  const [search, setsearch] = useState("")

  const [qualityOrder, setqualityOrder] = useState()
  const [qualityDeliver, setQualityDeliver] = useState()
  const [ancillaryFee, setAncillaryFee] = useState()
  const [totalCosting, setTotalCosting] = useState()

  function getSummery(arr, prop1, prop2, prop3, prop4) {
    let salary = arr.reduce((acc, val) => (acc += val[prop1]), 0)
    setqualityOrder(salary)
    let quantity = arr.reduce((acc, val) => (acc += val[prop2]), 0)
    setQualityDeliver(quantity)
    let cost = arr.reduce((acc, val) => (acc += val[prop3]), 0)
    setTotalCosting(cost)
    let ancillaryFee = arr.reduce((acc, val) => (acc += val[prop4]), 0)
    setAncillaryFee(ancillaryFee)
  }

  useEffect(() => {
    getSummery(
      data,
      "qualityOrdered",
      "qualityDelivered",
      "totalCost",
      "ancillaryFees"
    )
  }, [])

  const emptyRowsData =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

  var d = new Date()
  var n = d.getTime()

  let exportDate = new Date()
  const orderFilename =
    "hauler-order-data-" + moment(exportDate).format("DD-MM-YY, h:mm:ss a")

  const detailsFilename =
    "hauler-details-data-" + moment(exportDate).format("DD-MM-YY, h:mm:ss a")

  const handleColumn = e => {
    setColumn(e.target.value)
  }

  const handleSearch = (e, flag) => {
    let search = ""
    let filtered = ""
    switch (flag) {
      case "Customer Number":
        setCustomerNumber(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.customerNumber.toLowerCase().indexOf(search.toLowerCase()) !==
            -1
          )
        })
        setFilterCustomer(filtered)

        break
      case "Order Number":
        console.log(flag)
        setOrderNumber(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.orderNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)
        break
      case "Customer Name":
        setCustomerName(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.customerName.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)
        console.log(flag)
        break
      case "Customer Location":
        setCustomerLocation(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.customerLocation
              .toLowerCase()
              .indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)
        console.log(flag)
        break
      case "PO Number":
        setPOnumber(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.poNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)
        console.log(flag)
        break
      case "Rack Location":
        setRackLocation(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.rackLocation.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)
        console.log(flag)
        break
      case "Order Date":
        setOrderDate(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.orderDate.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)

        console.log(flag)
        break
      case "Delivery Date":
        setDiliveryDate(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.DiliveryDate.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer(filtered)
        console.log(flag)
        break
      case "Delivery Window":
        setDiliveryWindow(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return (
            item.DiliveryWindow.toLowerCase().indexOf(search.toLowerCase()) !==
            -1
          )
        })
        setFilterCustomer(filtered)
        console.log(flag)
        break
      case "Status":
        setStatus(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        setFilterCustomer(filtered)
        console.log(filtered)
        break
      case "Alert":
        setAlert(e.target.value)
        search = e.target.value

        filtered = rows.filter(item => {
          return item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        setFilterCustomer(filtered)
        console.log(filtered)
        break

      default:
        setFilterCustomer(rows)
        break
    }
  }

  const handleSearch2 = (e, flag) => {
    let search = ""
    let filtered = ""
    switch (flag) {
      case "Line Number":
        setLineNumber(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.lineNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer2(filtered)

        break
      case "Product":
        console.log(flag)
        setProduct(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return item.product.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        setFilterCustomer2(filtered)
        break
      case "Rack Location 2":
        setRackLocation2(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.rackLocation.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer2(filtered)
        console.log(flag)
        break
      case "Quality Order":
        setQualityOrder(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.qualityOrdered.toLowerCase().indexOf(search.toLowerCase()) !==
            -1
          )
        })
        setFilterCustomer2(filtered)

        break
      case "Quality Delivered":
        setQualityDelivered(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.qualityDelivered
              .toLowerCase()
              .indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer2(filtered)
        console.log(flag)
        break
      case "Freight Ticket":
        setFreightTicket(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.freightTicket.toLowerCase().indexOf(search.toLowerCase()) !==
            -1
          )
        })
        setFilterCustomer2(filtered)
        console.log(flag)
        break
      case "Ancillary Fees":
        setAncillaryFees(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.ancillaryFees.toLowerCase().indexOf(search.toLowerCase()) !==
            -1
          )
        })
        setFilterCustomer2(filtered)

        console.log(flag)
        break
      case "Total Cost":
        setTotalCost(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return (
            item.totalCost.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        })
        setFilterCustomer2(filtered)

        break
      case "Status2":
        setStatus2(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        setFilterCustomer2(filtered)

        break

      case "Alert2":
        setAlert2(e.target.value)
        search = e.target.value

        filtered = data.filter(item => {
          return item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        setFilterCustomer2(filtered)

        break

      default:
        setFilterCustomer2(data)
        break
    }
  }

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <div className="m-3">
                <b>Last Update: </b>{" "}
                {moment(n).format("MMMM Do YYYY, h:mm:ss a")}
                <div className="mt-1">
                  <Link>Refresh</Link>
                </div>
              </div>
              {/* <div className="row mt-4 ml-3">
                <div className="col-md-2">
                  <select
                    onChange={handleColumn}
                    style={{ width: "15rem", padding: "7px" }}
                  >
                    <option value="" disabled selected>
                      Select Columns
                    </option>
                    <option value="terminal">Customer Number</option>
                    <option value="ulsd">Order Number</option>
                    <option value="urleaded">Customer Name</option>
                    <option value="mid-grade">Customer Location </option>
                    <option value="premium-grade">PO Number </option>
                    <option value="heating-oil">Rack Location</option>
                    <option value="butane">Order Date </option>
                    <option value="karosene">Delivery Date </option>
                    <option value="propane">Status </option>
                    <option value="bitumen">Alerts </option>
                  </select>
                </div>
                <div className="col-md-1">
                  <input
                    value={search}
                    onChange={searchOnChange}
                    placeholder="Search..."
                    disabled={column == ""}
                    style={{ width: "15rem", padding: "7px" }}
                  />
                </div>
              </div>
             */}
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="custom pagination table"
                >
                  <TableHead>
                    <TableRow>
                    <TableCell
                        id="iconCellT"
                        style={{ width: "100px" }}
                        className="table-headers-tables"
                      >
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Actions</b>
                        </div>
                        <div style={{width:"100px",height:"28px"}}></div>
                        {/* <input/> */}
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Order Number</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={OrderNumber}
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Order Number")}
                        />
                      </TableCell>

                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Customer Number</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={CustomerNumber}
                          onChange={e => handleSearch(e, "Customer Number")}
                          placeholder="Search"
                        />
                      </TableCell>

                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Customer Name</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={CustomerName}
                          onChange={e => handleSearch(e, "Customer Name")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">
                            Customer Location
                          </b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Customer Location")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">PO Number</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "PO Number")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Rack Location</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Rack Location")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Order Date</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Order Date")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Delivery Date</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Delivery Date")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Delivery Window</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Delivery Window")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Status</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Status")}
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Alerts</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          placeholder="Search"
                          onChange={e => handleSearch(e, "Alert")}
                        />
                      </TableCell>
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? filterCustomer.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : filterCustomer
                    ).map((row, i) => (
                      <TableRow
                        key={i}
                        className={
                          i % 2 == 0
                            ? "tableCell-bottom-dark"
                            : "tableCell-bottom-light"
                        }
                      >
                         <TableCell style={{width:"120px", }} id="iconCellB" className="tableCell-bottom">
                          <EditIcon onClick={() => handleChange("edit", row)} />{" "}
                          &nbsp;
                          <ListIcon onClick={() => handleChange("list", row)} />
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.orderNumber}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.customerNumber}
                        </TableCell>

                        <TableCell className="tableCell-bottom">
                          {row.customerName}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.customerLocation}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.poNumber}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.rackLocation}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {moment(row.orderDate).format("DD/MM/YY")}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {moment(row.deliveryDate).format("DD/MM/YY")}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          <select>
                            <option>Select</option>
                            <option>00:00 – 05:59</option>
                            <option>06:00 – 11:59</option>
                            <option>12:00 – 5:59</option>
                            <option>6:00 – 11:59</option>
                          </select>
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.status}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.alerts}
                        </TableCell>
                        {/* <TableCell className="tableCell-bottom">
                          <EditIcon onClick={() => handleChange("edit", row)} />{" "}
                          &nbsp;
                          <ListIcon onClick={() => handleChange("list", row)} />
                        </TableCell> */}
                      </TableRow>
                    ))}

                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: { "aria-label": "rows per page" },
                          native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
                <div className="float-right mt-2 mb-3 mr-4">
                  <ExportCSV csvData={rows} fileName={orderFilename} />
                </div>
              </TableContainer>
            </Card>
          </div>
        </Row>
        {/* second table */}
        <Row>
          <div className="col mt-3">
            <Card className="shadow">
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="custom pagination table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title"> Line Number</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={LineNumber}
                          onChange={e => handleSearch2(e, "Line Number")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Product</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={Product}
                          onChange={e => handleSearch2(e, "Product")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Rack Location</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={RackLocation2}
                          onChange={e => handleSearch2(e, "Rack Location")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">
                            Quality Order (gal)
                          </b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={QualityOrder}
                          onChange={e => handleSearch2(e, "Quality Order")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">
                            Quality Delivered (gal)
                          </b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={QualityDelivered}
                          onChange={e => handleSearch2(e, "Quality Delivered")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Freight Ticket</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={FreightTicket}
                          onChange={e => handleSearch2(e, "Freight Ticket")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Ancillary Fees</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={AncillaryFees}
                          onChange={e => handleSearch2(e, "Ancillary Fees")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Total Cost</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={TotalCost}
                          onChange={e => handleSearch2(e, "Total Cost")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Status2</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={Status2}
                          onChange={e => handleSearch2(e, "Status2")}
                          placeholder="Search"
                        />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                        <div className="tableCell-top">
                          <b className="tableCell-top-title">Alert2</b>
                        </div>
                        <input
                          className="tableCell-top-input"
                          value={Alert2}
                          onChange={e => handleSearch2(e, "Alert2")}
                          placeholder="Search"
                        />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? filterCustomer2.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage,
                          page * rowsPerPage + rowsPerPage + rowsPerPage,
                          page * rowsPerPage +
                            rowsPerPage +
                            rowsPerPage +
                            rowsPerPage,
                          page * rowsPerPage +
                            rowsPerPage +
                            rowsPerPage +
                            rowsPerPage +
                            rowsPerPage
                        )
                      : data
                    ).map((row, i) => (
                      <TableRow
                        key={i}
                        className={
                          i % 2 == 0
                            ? "tableCell-bottom-dark"
                            : "tableCell-bottom-light"
                        }
                      >
                        <TableCell className="tableCell-bottom">
                          {row.lineNumber}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.product}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.rackLocation}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.qualityOrdered}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.qualityDelivered}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.freightTicket}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {/* $ {row.ancillaryFees} */}
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(row.ancillaryFees)}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          $ {row.totalCost}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.status}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.alerts}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow style={{ backgroundColor: "lightgray" }}>
                      <TableCell className="tableCell-bottom"></TableCell>
                      <TableCell className="tableCell-bottom"></TableCell>
                      <TableCell className="tableCell-bottom"></TableCell>
                      <TableCell className="tableCell-bottom">
                        {qualityOrder}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {qualityDeliver}
                      </TableCell>
                      <TableCell className="tableCell-bottom"></TableCell>
                      <TableCell className="tableCell-bottom">
                        {/* {ancillaryFee} */}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(ancillaryFee)}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {/* {totalCosting} */}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(totalCosting)}
                      </TableCell>
                      <TableCell className="tableCell-bottom"></TableCell>
                      <TableCell className="tableCell-bottom"></TableCell>
                    </TableRow>

                    {emptyRowsData > 0 && (
                      <TableRow style={{ height: 53 * emptyRowsData }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: { "aria-label": "rows per page" },
                          native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
                <div className="float-right mt-2 mb-3 mr-4">
                  <ExportCSV csvData={data} fileName={detailsFilename} />
                </div>
              </TableContainer>
            </Card>
          </div>
        </Row>

        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              {isEdit ? "Edit" : "View"}
            </ModalHeader>
            {isEdit ? (
              <ModalBody>
                <FormGroup>
                  <Label for="exampleEmail">Status</Label>
                  <Input type="text" id="exampleEmail" placeholder="Status" />
                </FormGroup>
              </ModalBody>
            ) : (
              //  <QRCode className="qr-code-design" id="id" size={170} value={row ? JSON.stringify(row) : ""} />
              <ModalBody>
                <div className="row">
                  <div className="col-md-3 ml-4"/>
                  <div className="col-md-1">
                  <QRCode
                    className="qr-code-design"
                    id="id"
                    size={170}
                    value={EditObj ? JSON.stringify(EditObj) : ""}
                  />
                  </div>
                </div>
              </ModalBody>
            )}
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                {isEdit ? "Edit Status" : "Download PDF"}
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        {/* Dark table */}
      </Container>
    </>
  )
}

export default Tables
