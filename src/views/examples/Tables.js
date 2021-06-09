import React, { useState } from "react"
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

import { ExportCSV } from "./excel/exportExcel"

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

const Tables = () => {
  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

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
      lineNumber: "123456",
      product: "Reg Gas",
      rackLocation: "London",
      qualityOrdered: "3,000",
      qualityDelivered: "5,700",
      freightTicket: "123456789",
      ancillaryFees: "$23",
      totalCost: "$234,565",
      status: "Scheduled",
      alerts: "None",
    },
    {
      lineNumber: "098765",
      product: "Mid Gas",
      rackLocation: "London",
      qualityOrdered: "2,500",
      qualityDelivered: "12,000",
      freightTicket: "123456789",
      ancillaryFees: "$43",
      totalCost: "$234,565",
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

  const [HaulerData, setHaulerData] = useState(rows)
  const [column, setColumn] = useState("")
  const [search, setsearch] = useState("")

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

  const searchOnChange = e => {
    setsearch(e.target.value)

    let search = e.target.value
    if (column != "") {
      if (search != "") {
        if (column == "terminal") {
          const filtered = HaulerData.filter(item => {
            return (
              item.customerNumber
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "ulsd") {
          const filtered = HaulerData.filter(item => {
            return (
              item.orderNumber.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "urleaded") {
          const filtered = HaulerData.filter(item => {
            return (
              item.customerName.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "mid-grade") {
          const filtered = HaulerData.filter(item => {
            return (
              item.customerLocation
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "premium-grade") {
          const filtered = HaulerData.filter(item => {
            return (
              item.poNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "heating-oil") {
          const filtered = HaulerData.filter(item => {
            return (
              item.rackLocation.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "butane") {
          const filtered = HaulerData.filter(item => {
            return (
              item.orderDate.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "karosene") {
          const filtered = HaulerData.filter(item => {
            return (
              item.deliveryDate.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setHaulerData(filtered)
        } else if (column == "propane") {
          const filtered = HaulerData.filter(item => {
            return (
              item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setHaulerData(filtered)
        } else {
          const filtered = HaulerData.filter(item => {
            return (
              item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setHaulerData(filtered)
        }
      } else {
        setHaulerData(rows)
      }
    } else {
      alert("error")
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
              <div className="row mt-4 ml-3">
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
              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="custom pagination table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <b>Customer Number</b>
                      </TableCell>
                      <TableCell>
                        <b>Order Number</b>
                      </TableCell>
                      <TableCell>
                        <b>Customer Name</b>
                      </TableCell>
                      <TableCell>
                        <b>Customer Location</b>
                      </TableCell>
                      <TableCell>
                        <b>PO Number</b>
                      </TableCell>
                      <TableCell>
                        <b>Rack Location</b>
                      </TableCell>
                      <TableCell>
                        <b>Order Date</b>
                      </TableCell>
                      <TableCell>
                        <b>Delivery Date</b>
                      </TableCell>
                      <TableCell>
                        <b>Status</b>
                      </TableCell>
                      <TableCell>
                        <b>Alerts</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? HaulerData.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : HaulerData
                    ).map((row, i) => (
                      <TableRow key={i}>
                        <TableCell style={{ width: 250 }}>
                          {row.customerNumber}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.orderNumber}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.customerName}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.customerLocation}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.poNumber}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.rackLocation}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {moment(row.orderDate).format("DD/MM/YY")}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {moment(row.deliveryDate).format("DD/MM/YY")}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.status}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.alerts}
                        </TableCell>
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
                      <TableCell>
                        <b> Line Number</b>
                      </TableCell>
                      <TableCell>
                        <b>Product</b>
                      </TableCell>
                      <TableCell>
                        <b>Rack Location</b>
                      </TableCell>
                      <TableCell>
                        <b>Quality Order (gal)</b>
                      </TableCell>
                      <TableCell>
                        <b>Quality Delivered (gal)</b>
                      </TableCell>
                      <TableCell>
                        <b>Freight Ticket</b>
                      </TableCell>
                      <TableCell>
                        <b>Ancillary Fees</b>
                      </TableCell>
                      <TableCell>
                        <b>Total Cost</b>
                      </TableCell>
                      <TableCell>
                        <b>Status</b>
                      </TableCell>
                      <TableCell>
                        <b>Alerts</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? data.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : data
                    ).map((row, i) => (
                      <TableRow key={i}>
                        <TableCell style={{ width: 250 }}>
                          {row.lineNumber}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.product}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.rackLocation}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.qualityOrdered}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.qualityDelivered}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.freightTicket}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.ancillaryFees}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.totalCost}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.status}
                        </TableCell>
                        <TableCell style={{ width: 200 }}>
                          {row.alerts}
                        </TableCell>
                      </TableRow>
                    ))}

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
        {/* Dark table */}
      </Container>
    </>
  )
}

export default Tables
