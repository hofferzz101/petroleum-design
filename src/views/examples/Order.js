import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
// reactstrap components
import {
  Card,
  FormGroup,
  Label,
  Form,
  Input,
  Row,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Container,
} from "reactstrap"
import Button from "@material-ui/core/Button"

import IconButton from "@material-ui/core/IconButton"
import FirstPageIcon from "@material-ui/icons/FirstPage"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import LastPageIcon from "@material-ui/icons/LastPage"
// core components
import Header from "components/Headers/Header.js"

import XLSX from "xlsx"
import { make_cols } from "./excel/MakeColumns"

import { useHistory, Link } from "react-router-dom"
import QRCode from "react-qr-code"

import CollapsedTable from "./expendTable"

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

  const [orderModal, setOrderModal] = useState(false)

  const addOrderModal = () => setOrderModal(!orderModal)

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

  const [QR_Object, setQR_Object] = useState({})
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

      localStorage.setItem("Petroleum_Item", JSON.stringify(data, null, 2))

      setCol(make_cols(ws["!ref"]))

      history.push("/admin/user")
      history.push("/admin/orders")
    }

    if (rABS) {
      reader.readAsBinaryString(uploadedFile)
    } else {
      reader.readAsArrayBuffer(uploadedFile)
    }
  }

  const createConfirmation = () => {
    localStorage.setItem("confirm_product", JSON.stringify(generateTable))
    history.push("/admin/order-conformation")
  }

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("Petroleum_Item"))

    if (data.length) {
      setQR_Object(data[0])
      let products = data ? data[0].Product.split(",") : []
      let gallons = data ? data[0].Gallons.split(",") : []
      let shipTo = data ? data[0].Shipto.toString().split("/") : []
      let destination = data ? data[0].Destination.split(",") : []

      let formatedArray = []

      products.map((item, idx) => {
        formatedArray.push({
          Product: item,
          Gallons: gallons[idx],
          ShipTo: shipTo[idx],
          Destination: destination[idx],
          OrderNo: data[0]["order_number"],
          CreatedAt: data[0]["created date"],
        })
      })

      setgenerateTable(formatedArray)
    }
  }, [])
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <div className="row mt-4">
                <div className="col-md-9" />

                  <div className="col-md-2 mb-4">
                  <input style={{width:"240px"}} placeholder="Search Table"/>
                 </div>
                {/* <div className="col-md-2 mb-4">
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
                      Pick CSV
                    </Button>
                  </label>
                  &nbsp; &nbsp; &nbsp;
                  <Button
                    color="primary"
                    onClick={() => history.push("/admin/create-order")}
                  >
                    Add Order
                  </Button>
                </div> */}
              </div>
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-10 mb-5">
                  <CollapsedTable />
                </div>
              </div>
              {/* <QRCode value="hey" /> */}
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
