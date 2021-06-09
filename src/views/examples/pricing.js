import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
// reactstrap components
import {
  Button,
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
  Container,
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

const Pricing = () => {
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

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const [column, setColumn] = useState("")
  const [search, setsearch] = useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRowsData =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    const [pricingData, setPricingData] = useState(data)

  const handleColumn = e => {
    setColumn(e.target.value)
  }

  const searchOnChange = e => {
    setsearch(e.target.value)

    let search = e.target.value
    if (column != "") {
      if (search != "") {
        if (column == "terminal") {
          const filtered = pricingData.filter(item => {
            return (
              item.lineNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else if (column == "ulsd") {
          const filtered = pricingData.filter(item => {
            return (
              item.product.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else if (column == "urleaded") {
          const filtered = pricingData.filter(item => {
            return (
              item.rackLocation.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setPricingData(filtered)
        } else if (column == "mid-grade") {
          const filtered = pricingData.filter(item => {
            return (
              item.qualityOrdered
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else if (column == "premium-grade") {
          const filtered = pricingData.filter(item => {
            return (
              item.qualityDelivered
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else if (column == "heating-oil") {
          const filtered = pricingData.filter(item => {
            return (
              item.freightTicket.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setPricingData(filtered)
        } else if (column == "butane") {
          const filtered = pricingData.filter(item => {
            return (
              item.ancillaryFees.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setPricingData(filtered)
        } else if (column == "karosene") {
          const filtered = pricingData.filter(item => {
            return (
              item.totalCost.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else if (column == "propane") {
          const filtered = pricingData.filter(item => {
            return (
              item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else if (column == "bitumen") {
          const filtered = pricingData.filter(item => {
            return (
              item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setPricingData(filtered)
        } else {
          const filtered = pricingData.filter(item => {
            return item.ngl.toLowerCase().indexOf(search.toLowerCase()) !== -1
          })
          setPricingData(filtered)
        }
      } else {
        setPricingData(data)
      }
    } else {
      alert("error")
    }
  }

  let exportDate = new Date()
  const fileName =
    "pricing-data-" + moment(exportDate).format("DD-MM-YY, h:mm:ss a")
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
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <FormGroup>
                      <Label for="product">Product</Label>
                      <Input type="select" name="productname" id="product">
                        <option>Enter Desired Product</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <FormGroup>
                      <Label for="terminalWithin">Terminals within</Label>
                      <Input type="select" name="terminal" id="terminalWithin">
                        <option>25 miles</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
        </Row>
        <div className="row mt-4">
          <div className="col-md-2">
            <select
              onChange={handleColumn}
              style={{ width: "15rem", padding: "7px" }}
            >
              <option value="" disabled selected>
                Select Columns
              </option>
              <option value="terminal">Terminal</option>
              <option value="ulsd">ULSD</option>
              <option value="urleaded">Unleaded Gasoline </option>
              <option value="mid-grade">Mid-Grade Gasoline </option>
              <option value="premium-grade">Premium Gasoline </option>
              <option value="heating-oil">Heating Oil </option>
              <option value="butane">Butane </option>
              <option value="karosene">Karosene </option>
              <option value="propane">Propane </option>
              <option value="bitumen">Bitumen </option>
              <option value="ngl">NGL </option>
            </select>
          </div>
          <div className="col-md-1">
            <input
              className="ml-3"
              value={search}
              onChange={searchOnChange}
              placeholder="Search..."
              disabled={column == ""}
              style={{ width: "15rem", padding: "7px" }}
            />
          </div>
        </div>
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
                        <b> Terminal</b>
                      </TableCell>
                      <TableCell>
                        <b>ULSD</b>
                      </TableCell>
                      <TableCell>
                        <b>Unleaded Gasoline</b>
                      </TableCell>
                      <TableCell>
                        <b>Mid-Grade Gasoline</b>
                      </TableCell>
                      <TableCell>
                        <b>Premium Gasoline</b>
                      </TableCell>
                      <TableCell>
                        <b>Heating Oil</b>
                      </TableCell>
                      <TableCell>
                        <b>Butane</b>
                      </TableCell>
                      <TableCell>
                        <b>Karosene</b>
                      </TableCell>
                      <TableCell>
                        <b>Propane</b>
                      </TableCell>
                      <TableCell>
                        <b>Bitumen</b>
                      </TableCell>
                      <TableCell>
                        <b>NGL</b>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? pricingData.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : pricingData
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
                        <TableCell style={{ width: 200 }}>{row.ngl}</TableCell>
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
                        count={pricingData.length}
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
                  <ExportCSV csvData={data} fileName={fileName} />
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

export default Pricing
