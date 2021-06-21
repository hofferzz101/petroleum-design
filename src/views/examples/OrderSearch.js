import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Collapse from "@material-ui/core/Collapse"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { ContactSupportOutlined } from "@material-ui/icons"

import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined"
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined"

import Header from "components/Headers/Header.js"
import "./pages/OrderSearch.css"
import QRCode from "react-qr-code"

// reactstrap components
import {
  Card,
  FormGroup,
  Label,
  Form,
  Input,
  Row,
  Modal,
  Button,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Container,
} from "reactstrap"

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
})

const rows = [
  {
    contract: "Exion Philadelphia",
    customernumber: "12.34",
    ordernumber: "23.45",
    haulernumber: "3000",
    drivernumber: "5700",
    ponumber:"111",
    suppliernumber: '2.343',
    terminalnumber: '23.45',
    orderdate: "89.87",
    
    expirationdate:"12.98",
    actions:"23.65",
  },
  {
    contract: "Exion Philadelphia",
    customernumber: "12.34",
    ordernumber: "23.45",
    haulernumber: "3000",
    drivernumber: "5700",
    suppliernumber: '2.343',
    terminalnumber: '23.45',
    orderdate: "89.87",
   
    expirationdate:"12.98",
    actions:"23.65",
  },
]

function Rows(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()

  let array = []
  if (row) {
    let product = row.Product
    let gallons = row.Gallons
    let destination = row.Destination
    let shipTo = row.ShipTo

    product.map((item, i) => {
      array.push({
        Product: item,
        Gallons: gallons[i],
        Destination: destination[i],
        ShipTo: shipTo[i],
      })
    })
  }

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <React.Fragment>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Order no: {row ? row.order_number : ""}</ModalHeader>
        <ModalBody style={{ textAlign: "center" }}>
          <QRCode size={200} value={row ? JSON.stringify(row) : ""} />
        </ModalBody>
      </Modal>

      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.Contract}</TableCell>
        <TableCell component="th" scope="row">
          {row["CustomerNumber"]}
        </TableCell>
        <TableCell>{row.order_number}</TableCell>
        <TableCell>{row["HaulerNumber"]}</TableCell>
        <TableCell>{row["DriverNumber"]}</TableCell>
        <TableCell>{row["PONumber"]}</TableCell>
        <TableCell>{row["SupplierNumber"]}</TableCell>
        <TableCell>{row["TerminalNumber"]}</TableCell>
        <TableCell>{row["createddate"]}</TableCell>
        <TableCell>{row["expirationdate"]}</TableCell>
        <TableCell style={{ width: 280 }}>
          <a style={{ cursor: "pointer" }} className="material-icons-outlined">
            <VisibilityOutlinedIcon />
          </a>
          &nbsp; &nbsp;
          <a style={{ cursor: "pointer" }} className="material-icons-outlined">
            <EditOutlinedIcon />
          </a>{" "}
          &nbsp; &nbsp;
          <a style={{ cursor: "pointer" }} className="material-icons-outlined">
            <DeleteOutlineOutlinedIcon />
          </a>{" "}
          &nbsp; &nbsp;
          <Button color="primary" variant="contained" onClick={toggle}>
            QR Code
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Gallons</TableCell>
                    <TableCell>Ship To</TableCell>
                    <TableCell>Destination</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {array.length
                    ? array.map((inner, j) => (
                        <TableRow key={j}>
                          <TableCell>{inner.Product}</TableCell>
                          <TableCell>{inner.Gallons}</TableCell>
                          <TableCell>{inner.ShipTo}</TableCell>
                          <TableCell>{inner.Destination}</TableCell>
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Rows.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
}

export default function CollapsibleTable() {
  const [MasterData, setMasterData] = useState([])
  const [search, setsearch] = useState("")

  const [filterCustomer, setFilterCustomer] = React.useState(rows)
  const [Contract, setContract] = React.useState("")
  const [CustomerNumber, setCustomerNumber] = React.useState("")
  const [OrderNumber, setOrderNumber] = React.useState("")
  const [HaulerNumber, setHaulerNumber] = React.useState("")
  const [DriverNumber, setDriverNumber] = React.useState("")
  const [PONumber, setPONumber] = React.useState("")
  const [SupplierNumber, setSupplierNumber] = React.useState("")
  const [TerminalNumber, setTerminalNumber] = React.useState("")
  const [OrderDate, setOrderDate] = React.useState("")
  const [ExpirationDate, setExpirationDate] = React.useState("")
  const [Actions, setActions] = React.useState("")
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [page, setPage] = React.useState(0)


  const handleSearch = (e, flag) => {
    let search = ""
    let filtered = ""
    switch (flag) {
      case "Contract":
        setContract(e.target.value)
      
         search = e.target.value
        
         filtered = rows.filter(item => {
          return (
            item.contract.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )

        })
        console.log("filter",filtered)
        setFilterCustomer(filtered)


        break;
      case "Customer Number":
        console.log(flag)
        setCustomerNumber(e.target.value)
         search = e.target.value
        
         filtered = rows.filter(item => {
          return (
            item.customernumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )

        })
        setFilterCustomer(filtered)
        break;
      case "Hauler Number":
        setHaulerNumber(e.target.value)
         search = e.target.value
        
         filtered = rows.filter(item => {
          return (
            item.haulernumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )

        })
        setFilterCustomer(filtered)
        console.log(flag)
        break;
      case "Driver Number":
        setDriverNumber(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.drivernumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(flag)
        break;
      case "PO Number":
        setPONumber(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.ponumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(flag)
        break;
      case "Supplier Number":
        setSupplierNumber(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.suppliernumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(flag)
        break;
      case "Terminal Number":
        setTerminalNumber(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.terminalnumber.toLowerCase().indexOf(search.toLowerCase()) !== -1
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
           item.orderdate.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(flag)
        break;
      
      case "Expiration Date":
        setExpirationDate(e.target.value)
        search = e.target.value
       
        filtered = rows.filter(item => {
         return (
           item.expirationdate.toLowerCase().indexOf(search.toLowerCase()) !== -1
         )

       })
       setFilterCustomer(filtered)
        console.log(filtered)
        break;
      case "Actions":
        setActions(e.target.value)
        search = e.target.value
        
        filtered = rows.filter(item => {
         return (
           item.actions.toLowerCase().indexOf(search.toLowerCase()) !== -1
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

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Petroleum_Item"))
    if (data) {
      let products = data ? data[0].Product.split(",") : []
      let gallons = data ? data[0].Gallons.split(",") : []
      let shipTo = data ? data[0].Shipto.toString().split("/") : []
      let destination = data ? data[0].Destination.split(",") : []

      let formatedArray = []

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
          formatedArray.push({
            Product: products,
            Gallons: gallons,
            ShipTo: shipTo,
            Destination: destination,
            Contract: data[i]["Contract"],
            CustomerNumber: data[i]["Customer Number"],
            DriverNumber: data[i]["Driver Number"],
            HaulerNumber: data[i]["Hauler Number"],
            PONumber: data[i]["PO Number"],
            PinCode: data[i]["Pin Code"],
            SupplierNumber: data[i]["Supplier Number"],
            TerminalNumber: data[i]["Terminal Number"],
            Trailer: data[i]["Trailer"],
            TruckNumber: data[i]["Truck Number"],
            createddate: data[i]["created date"],
            effectivedate: data[i]["effectiv edate"],
            expirationdate: data[i]["expiration date"],
            opendate: data[i]["open date"],
            order_number: data[i]["order_number"],
          })
        }
      }

      setMasterData(formatedArray)
      localStorage.setItem("formatedArray", JSON.stringify(formatedArray))
    }
  }, [])

  const searchOnChange = e => {
    setsearch(e.target.value)
    let search = e.target.value

    if (search != "") {
      const filtered = MasterData.filter(item => {
        return (
          JSON.stringify(item["order_number"]).indexOf(search.toLowerCase()) !==
          -1
        )
      })

      setMasterData(filtered)
    } else {
      let data = JSON.parse(localStorage.getItem("formatedArray"))
      setMasterData(data)
    }
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRowsData =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <>
      <Header />
      {/* Page content */}

      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <div className="row">
                <div className="col-md-9" />
                <div className="col-md-3 mt-3">
                  <Input
                    type="text"
                    placeholder="Search Order no..."
                    onChange={searchOnChange}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 mb-4">
                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow >
                          
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title"> Contract</b>
                            </div>
                            <input className="tableCell-top-input" value={Contract} onChange={(e) => handleSearch(e, "Contract")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title"> Customer Number</b>
                            </div>
                            <input className="tableCell-top-input" value={CustomerNumber} onChange={(e) => handleSearch(e, "Customer Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Order Number</b>
                            </div>
                            <input className="tableCell-top-input" value={OrderNumber} onChange={(e) => handleSearch(e, "Order Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Hauler Number</b>
                            </div>
                            <input className="tableCell-top-input" value={HaulerNumber} onChange={(e) => handleSearch(e, "Hauler Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Driver Number</b>
                            </div>
                            <input className="tableCell-top-input" value={DriverNumber} onChange={(e) => handleSearch(e, "Driver Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">PO Number</b>
                            </div>
                            <input className="tableCell-top-input" value={PONumber} onChange={(e) => handleSearch(e, "PO Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Supplier Number</b>
                            </div>
                            <input className="tableCell-top-input" value={SupplierNumber} onChange={(e) => handleSearch(e, "Supplier Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Terminal Number</b>
                            </div>
                            <input className="tableCell-top-input" value={TerminalNumber} onChange={(e) => handleSearch(e, "Terminal Number")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Order Date</b>
                            </div>
                            <input className="tableCell-top-input" value={OrderDate} onChange={(e) => handleSearch(e, "Order Date")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Expiration Date</b>
                            </div>
                            <input className="tableCell-top-input" value={ExpirationDate} onChange={(e) => handleSearch(e, "Expiration Date")} placeholder="Search" />
                          </TableCell>
                          <TableCell className="table-headers-tables">
                          <div className="tableCell-top">
                            <b className="tableCell-top-title">Actions</b>
                            </div>
                            <input className="tableCell-top-input" value={Actions} onChange={(e) => handleSearch(e, "Actions")} placeholder="Search" />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {MasterData
                          ? MasterData.map((row, i) => (
                              <Rows key={i} row={row} />
                            ))
                          : null}
                      </TableBody>
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
                        {row.contract}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.customernumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.ordernumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.haulernumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.drivernumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.ponumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.suppliernumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.terminalnumber}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.orderdate}
                      </TableCell>
                      <TableCell className="tableCell-bottom">
                        {row.expirationdate}
                      </TableCell>
                      <TableCell className="tableCell-bottom">{row.actions}</TableCell>
                    </TableRow>
                    ))}

                    {emptyRowsData > 0 && (
                      <TableRow style={{ height: 53 * emptyRowsData }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}
