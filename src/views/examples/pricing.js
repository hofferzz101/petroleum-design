import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import './pages/pricing.css'
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
      terminal: "Exion Philadelphia",
      ulsd: "12.34",
      unleadedgasoline: "23.45",
      midgradegasoline: "3000",
      premiumgasoline: "5700",
      heatingoil: '2.343',
      butane: '23.45',
      karosene: "89.87",
      propane: "98.9",
      bitumen:"12.98",
      ngl:"23.65",
    },
    {
      terminal: "BP Cherryhill",
      ulsd: "12.34",
      unleadedgasoline: "23.45",
      midgradegasoline: "3000",
      premiumgasoline: "5700",
      heatingoil: '2.343',
      butane: '23.45',
      karosene: "89.87",
      propane: "98.9",
      bitumen:"12.98",
      ngl:"23.65",
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

  // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const [column, setColumn] = useState("")
  const [search, setsearch] = useState("")

  const [filterCustomer, setFilterCustomer] = React.useState(rows)
  const [Terminal, setTerminal] = React.useState("")
  const [ULSD, setULSD] = React.useState("")
  const [UnleadedGas, setUnleadedGas] = React.useState("")
  const [MidGradeGas, setMidGradeGas] = React.useState("")
  const [PremiumGas, setPremiumGas] = React.useState("")
  const [HeatingOil, setHeatingOil] = React.useState("")
  const [Butane, setButane] = React.useState("")
  const [Karosene, setKarosene] = React.useState("")
  const [Propane, setPropane] = React.useState("")
  const [Bitumen, setBitumen] = React.useState("")
  const [NGL, setNGL] = React.useState("")

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRowsData =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)


    const handleSearch = (e, flag) => {
      let search = ""
      let filtered = ""
      switch (flag) {
        case "Terminal":
          setTerminal(e.target.value)
        
           search = e.target.value
          
           filtered = rows.filter(item => {
            return (
              item.terminal.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
  
          })
          console.log("filter",filtered)
          setFilterCustomer(filtered)
  
  
          break;
        case "ULSD":
          console.log(flag)
          setULSD(e.target.value)
           search = e.target.value
          
           filtered = rows.filter(item => {
            return (
              item.ulsd.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
  
          })
          setFilterCustomer(filtered)
          break;
        case "Unleaded Gasoline":
          setUnleadedGas(e.target.value)
           search = e.target.value
          
           filtered = rows.filter(item => {
            return (
              item.unleadedgasoline.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
  
          })
          setFilterCustomer(filtered)
          console.log(flag)
          break;
        case "Mid-Grade Gasoline":
          setMidGradeGas(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.midgradegasoline.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(flag)
          break;
        case "Premium Gasoline":
          setPremiumGas(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.premiumgasoline.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(flag)
          break;
        case "Heating Oil":
          setHeatingOil(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.heatingoil.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(flag)
          break;
        case "Butane":
          setButane(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.butane.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
         
          console.log(flag)
          break;
        case "Karosene":
          setKarosene(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.karosene.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(flag)
          break;
        case "Propane":
          setPropane(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.propane.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(flag)
          break;
        case "Bitumen":
          setBitumen(e.target.value)
          search = e.target.value
         
          filtered = rows.filter(item => {
           return (
             item.bitumen.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(filtered)
          break;
        case "NGL":
          setNGL(e.target.value)
          search = e.target.value
          
          filtered = rows.filter(item => {
           return (
             item.ngl.toLowerCase().indexOf(search.toLowerCase()) !== -1
           )
  
         })
         setFilterCustomer(filtered)
          console.log(filtered)
          break;
  
        default:
          setFilterCustomer(rows)
          break;
      }
    }


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
        {/* <div className="row mt-4">
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
        </div> */}
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
                        <b className="tableCell-top-title"> Terminal</b>
                        </div>
                        <input className="tableCell-top-input" value={Terminal} onChange={(e) => handleSearch(e, "Terminal")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">ULSD</b>
                        </div>
                        <input className="tableCell-top-input" value={ULSD} onChange={(e) => handleSearch(e, "ULSD")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Unleaded Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={UnleadedGas} onChange={(e) => handleSearch(e, "Unleaded Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Mid-Grade Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={MidGradeGas} onChange={(e) => handleSearch(e, "Mid-Grade Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Premium Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={PremiumGas} onChange={(e) => handleSearch(e, "Premium Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Heating Oil</b>
                        </div>
                        <input className="tableCell-top-input" value={HeatingOil} onChange={(e) => handleSearch(e, "Heating Oil")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Butane</b>
                        </div>
                        <input className="tableCell-top-input" value={Butane} onChange={(e) => handleSearch(e, "Butane")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Karosene</b>
                        </div>
                        <input className="tableCell-top-input" value={Karosene} onChange={(e) => handleSearch(e, "Karosene")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Propane</b>
                        </div>
                        <input className="tableCell-top-input" value={Propane} onChange={(e) => handleSearch(e, "Propane")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Bitumen</b>
                        </div>
                        <input className="tableCell-top-input" value={Bitumen} onChange={(e) => handleSearch(e, "Bitumen")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">NGL</b>
                        </div>
                        <input className="tableCell-top-input" value={NGL} onChange={(e) => handleSearch(e, "NGL")} placeholder="Search" />
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
                      
                      <TableRow key={i} className={i % 2 == 0 ? "tableCell-bottom-dark" : "tableCell-bottom-light"}>
                      <TableCell className="tableCell-bottom">
                        {row.terminal}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.ulsd}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.unleadedgasoline}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.midgradegasoline}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.premiumgasoline}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.freightTicket}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.heatingoil}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.butane}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.karosene}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.bitumen}
                      </TableCell>
                      <TableCell className="tableCell-bottom">{row.ngl}</TableCell>
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
