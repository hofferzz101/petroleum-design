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

import QRCode from "react-qr-code"

import { saveSvgAsPng } from "save-svg-as-png"
import "./pages/expendTable.css"
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

  const downloadQRCode = () => {
    saveSvgAsPng(document.getElementById("id"), row.order_number + "-qr.png")
  }

  return (
    <React.Fragment>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Order no: {row ? row.order_number : ""}</ModalHeader>
        <ModalBody style={{ textAlign: "center" }}>
          <div>

          </div>
        </ModalBody>
        <Button onClick={downloadQRCode}>Download QRCode</Button>
      </Modal>

      <TableRow id="opening-row-collapse" onClick={()=>setOpen(!open)} style={{}} className={classes.root}>
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
        {/* <TableCell style={{ width: 280 }}>
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
          <Button color="primary" variant="contained" >
            QR Code
          </Button>
        </TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <div className="table-styling">
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
                      <>
                      
                        <TableRow key={j}>
                          <TableCell>{inner.Product}</TableCell>
                          <TableCell>{inner.Gallons}</TableCell>
                          <TableCell>{inner.ShipTo}</TableCell>
                          <TableCell>{inner.Destination}</TableCell>
                        </TableRow>
                        
                      </>
                    ))
                    : null}
                </TableBody>
              </Table>
              
            </Box>
            </div>
            
          </Collapse>
        </TableCell>
        {
          open ?
            <div className="qr-design">
              <QRCode className="qr-code-design" id="id" size={170} value={row ? JSON.stringify(row) : ""} />
            </div> : null
        }
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
  // const [openingModal, setOpeningModal] = useState(false)
  

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
    }
  }, [])

  //  const handlingModal = ()=>{
  //     setOpeningModal(true)
  //  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <b> Contract</b>
            </TableCell>
            <TableCell>
              <b> Customer Number</b>
            </TableCell>
            <TableCell>
            <i onClick={{}} style={{marginRight:"3px"}} className="fas fa-pencil-alt"></i>
              <b>Order Number</b>
            </TableCell>
            <TableCell>
              <b>Hauler Number</b>
            </TableCell>
            <TableCell>
              <b>Driver Number</b>
            </TableCell>
            <TableCell>
              <b>PO Number</b>
            </TableCell>
            <TableCell>
              <b>Supplier Number</b>
            </TableCell>
            <TableCell>
              <b>Terminal Number</b>
            </TableCell>
            <TableCell>
              <b>Order Date</b>
            </TableCell>
            <TableCell>
              <b>Expiration Date</b>
            </TableCell>
            {/* <TableCell>
              <b>Actions</b>
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {MasterData
            ? MasterData.map((row, i) =>
              <Rows key={i} row={row} />
            )
            : null}

        </TableBody>
      </Table>
    </TableContainer>
  )
}
