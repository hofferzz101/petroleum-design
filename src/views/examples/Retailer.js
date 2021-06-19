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
import { Link, useHistory } from "react-router-dom"
import "./pages/Retailer.css"


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

const RetailerPortal = () => {
    
   
  const history = useHistory()
  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [column, setColumn] = useState("")
  const [search, setsearch] = useState("")

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

  const [retailerData, setRetailerData] = useState(data)

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


  const handleSearch = (e, flag) => {
    let search = ""
    let filtered = ""
    switch (flag) {
      case "Customer Number":
        setCustomerNumber(e.target.value)
      
         search = e.target.value
        
         filtered = rows.filter(item => {
          return (
            item.customerNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )

        })
        console.log("filter",filtered)
        setFilterCustomer(filtered)


        break;
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
        break;
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
        break;
      case "Customer Location":
        setCustomerLocation(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.customerLocation.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(flag)
        break;
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
        break;
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
        break;
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
        break;
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
        break;
      case "Delivery Window":
        setDiliveryWindow(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.DiliveryWindow.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(flag)
        break;
      case "Status":
        setStatus(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(filtered)
        break;
      case "Alert":
        setAlert(e.target.value)
        search = e.target.value
        
        filtered = rows.filter(item => {
         return (
           item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
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


        break;
      case "Product":
        console.log(flag)
        setProduct(e.target.value)
         search = e.target.value
        
         filtered = data.filter(item => {
          return (
            item.product.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )

        })
        setFilterCustomer2(filtered)
        break;
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
        break;
      case "Quality Order":
        setQualityOrder(e.target.value)
        search = e.target.value
       
        filtered = data.filter(item => {
         return (
           item.qualityOrdered.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
        
        break;
      case "Quality Delivered":
        setQualityDelivered(e.target.value)
        search = e.target.value
       
        filtered = data.filter(item => {
         return (
           item.qualityDelivered.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
        console.log(flag)
        break;
      case "Freight Ticket":
        setFreightTicket(e.target.value)
        search = e.target.value
       
        filtered = data.filter(item => {
         return (
           item.freightTicket.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
        console.log(flag)
        break;
      case "Ancillary Fees":
        setAncillaryFees(e.target.value)
        search = e.target.value
       
        filtered = data.filter(item => {
         return (
           item.ancillaryFees.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
       
        console.log(flag)
        break;
      case "Total Cost":
        setTotalCost(e.target.value)
        search = e.target.value
       
        filtered = data.filter(item => {
         return (
           item.totalCost.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
        
        break;
      case "Status2":
        setStatus2(e.target.value)
        search = e.target.value
       
        filtered = data.filter(item => {
         return (
           item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
        
        break;
      
      case "Alert2":
        setAlert2(e.target.value)
        search = e.target.value
        
        filtered = data.filter(item => {
         return (
           item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer2(filtered)
        
        break;

      default:
        setFilterCustomer2(data)
        break;
    }
  }




  const handleColumn = e => {
    setColumn(e.target.value)
  }

  const searchOnChange = e => {
    setsearch(e.target.value)

    let search = e.target.value
    if (column != "") {
      if (search != "") {
        if (column == "terminal") {
          const filtered = retailerData.filter(item => {
            return (
              item.lineNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "ulsd") {
          const filtered = retailerData.filter(item => {
            return (
              item.product.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "urleaded") {
          const filtered = retailerData.filter(item => {
            return (
              item.rackLocation.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "mid-grade") {
          const filtered = retailerData.filter(item => {
            return (
              item.qualityOrdered
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "premium-grade") {
          const filtered = retailerData.filter(item => {
            return (
              item.qualityDelivered
                .toLowerCase()
                .indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "heating-oil") {
          const filtered = retailerData.filter(item => {
            return (
              item.freightTicket.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "butane") {
          const filtered = retailerData.filter(item => {
            return (
              item.ancillaryFees.toLowerCase().indexOf(search.toLowerCase()) !==
              -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "karosene") {
          const filtered = retailerData.filter(item => {
            return (
              item.totalCost.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "propane") {
          const filtered = retailerData.filter(item => {
            return (
              item.status.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else if (column == "bitumen") {
          const filtered = retailerData.filter(item => {
            return (
              item.alerts.toLowerCase().indexOf(search.toLowerCase()) !== -1
            )
          })
          setRetailerData(filtered)
        } else {
          const filtered = retailerData.filter(item => {
            return item.ngl.toLowerCase().indexOf(search.toLowerCase()) !== -1
          })
          setRetailerData(filtered)
        }
      } else {
        setRetailerData(data)
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
                <Form>
                  <div className="row">
                    <div className="col-md-3">
                      <Label for="exampleSelectMulti">
                        QuickMart Feul & Convenience Stores
                      </Label>
                      <FormGroup>
                        <Label for="exampleSelectMulti">Location</Label>
                        <Input
                          type="select"
                          name="selectMulti"
                          id="exampleSelectMulti"
                        >
                          <option>76 River St.Chicago, LA</option>
                          <option>Location 2</option>
                          <option>Location 3</option>
                          <option>Location 4</option>
                          <option>Location 2</option>
                        </Input>
                      </FormGroup>
                    </div>
                  </div>
                </Form>
                <b>Station Number: </b> 2343 <br />
                <b>Last Update: </b>{" "}
                {moment(n).format("MMMM Do YYYY, h:mm:ss a")}
                <div className="mt-1">
                  <Link>Refresh</Link>
                  <div className="float-right">
                    <Button
                      color="primary"
                      onClick={() => history.push("/admin/create-order")}
                    >
                      Create Order
                    </Button>
                  </div>
                </div>
                
              </div>
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
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title"> Terminal</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Terminal")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">ULSD</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "ULSD")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Unleaded Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Unleaded Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Mid-Grade Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Mid-Grade Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Premium Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Premium Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Heating Oil</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Heating Oil")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Butane</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Butane")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Karosene</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Karosene")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Propane</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Propane")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Bitumen</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Bitumen")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">NGL</b>
                        </div>
                        <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "NGL")} placeholder="Search" />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? retailerData.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : retailerData
                    ).map((row, i) => (
                      <TableRow key={i} className={i % 2 == 0 ? "tableCell-bottom-dark" : "tableCell-bottom-light"}>
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
                          {row.ancillaryFees}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.totalCost}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.status}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.alerts}
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
                        count={retailerData.length}
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
              </TableContainer>

              <TableContainer className="mt-6" component={Paper}>
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
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Terminal")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">ULSD</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "ULSD")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Unleaded Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Unleaded Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Mid-Grade Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Mid-Grade Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Premium Gasoline</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Premium Gasoline")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Heating Oil</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Heating Oil")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Butane</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Butane")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Karosene</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Karosene")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Propane</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Propane")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Bitumen</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "Bitumen")} placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">NGL</b>
                        </div>
                        <input className="tableCell-top-input" value={LineNumber} onChange={(e)=>handleSearch2(e, "NGL")} placeholder="Search" />
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
                      <TableRow key={i} className={i % 2 == 0 ? "tableCell-bottom-dark" : "tableCell-bottom-light"}>
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
                          {row.ancillaryFees}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.totalCost}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.status}
                        </TableCell>
                        <TableCell className="tableCell-bottom">
                          {row.alerts}
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
              </TableContainer>
            </Card>
          </div>
        </Row>

        {/* Dark table */}
      </Container>
    </>
  )
}

export default RetailerPortal
