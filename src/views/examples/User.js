
import React, { useState } from "react"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { ExportCSV } from "./excel/exportExcel"

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
  PaginationLink,
  Progress,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap"

import EditOutlinedIcon from "@material-ui/icons/EditOutlined"
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined"
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined"
import { Popconfirm } from "antd"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

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

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Draggable from "react-draggable"
import "./pages/User.css"

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

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

const User = props => {
  const { buttonLabel, className } = props

  const classes = useStyles2()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const [column, setColumn] = useState("")
  const [search, setsearch] = useState("")

  let exportDate = new Date()
  const fileName =
    "user-data-" + moment(exportDate).format("DD-MM-YY, h:mm:ss a")

  const rows = [
    {
      name: "Alex",
      email: "alex@gmail.com",
      role: "Trader",
      limit: "$700k",
    },
    {
      name: "John",
      email: "John@gmail.com",
      limit: "$900k",
      role: "Manager",
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

  var d = new Date()
  var n = d.getTime()

  const [modal, setModal] = useState(false)
  const [showViewModal, setshowViewModal] = useState(false)
  const [showEditModal, setshowEditModal] = useState(false)

  const toggle = () => setModal(!modal)

  const toggleEditModal = () => setshowEditModal(!showEditModal)

  const toggleViewModal = () => setshowViewModal(!showViewModal)

  const [EditData, setEditData] = useState({})
  const [viewData, setviewData] = useState({})

  const [userData, setData] = useState(rows)

  const [open, setOpen] = React.useState(false)

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [limit, setlimit] = useState("")

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const viewModal = item => {
    setviewData(item)
    setshowViewModal(true)
  }

  const editUser = item => {
    setEditData(item)

    setname(item.name)
    setemail(item.email)
    setlimit(item.limit)

    setshowEditModal(true)
  }

  const handleColumn = e => {
    setColumn(e.target.value)
  }

  const searchOnChange = e => {
    setsearch(e.target.value)

    let search = e.target.value
    if (column != "") {
      if (search != "") {
        if (column == "name") {
          const filtered = userData.filter(item => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
          })
          setData(filtered)
        } else if (column == "email") {
          const filtered = userData.filter(item => {
            return item.email.toLowerCase().indexOf(search.toLowerCase()) !== -1
          })
          setData(filtered)
        } else if (column == "title") {
          const filtered = userData.filter(item => {
            return item.role.toLowerCase().indexOf(search.toLowerCase()) !== -1
          })
          setData(filtered)
        } else {
          const filtered = userData.filter(item => {
            return (
              item.limit.toLowerCase().indexOf(
                search.toLowerCase()
              ) !== -1
            )
          })
          setData(filtered)
        }
      } else {
        setData(rows)
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
                  <div className="mt-3">
                    <select
                      onChange={handleColumn}
                      style={{ width: "15rem", padding: "7px" }}
                    >
                      <option value="" disabled selected>
                        Select Columns
                      </option>
                      <option value="name">Name</option>
                      <option value="email">Email</option>
                      <option value="title">Title</option>
                      <option value="limit">Limit</option>
                    </select>
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
                <div align="right">
                  <Button color="primary" onClick={toggle}>
                    Add User
                  </Button>
                  <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Add User</ModalHeader>
                    <ModalBody>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="Username"
                              type="text"
                              autoComplete="new-username"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="Email"
                              type="email"
                              autoComplete="new-email"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Input type="select" name="select" id="exampleSelect">
                            <option selected disabled value="">
                              Select Account Title
                            </option>
                            <option>Author</option>
                            <option>Hauler</option>
                            <option>Wholesaler</option>
                            <option>Retailer</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <Input placeholder="Account Limit" type="text" />
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>
                        Add{" "}
                      </Button>{" "}
                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  {/* edit modal */}
                  <Modal
                    isOpen={showEditModal}
                    toggle={toggleEditModal}
                    className={className}
                  >
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalBody>
                      <Form role="form">
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="Username"
                              type="text"
                              value={name}
                              onChange={e => setname(e.target.value)}
                              autoComplete="new-username"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="Email"
                              type="email"
                              value={email}
                              onChange={e => setemail(e.target.value)}
                              autoComplete="new-email"
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <Input
                            type="select"
                            name="select"
                            id="exampleSelect"
                            value={EditData.role}
                          >
                            <option selected disabled value="">
                              Select Account Title
                            </option>
                            <option value="Trader">Trader</option>
                            <option value="Manager">Manager</option>
                            <option value="Buyer">Buyer</option>
                          </Input>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <Input
                              placeholder="Account Limit"
                              value={limit}
                              type="text"
                              onChange={e => setlimit(e.target.value)}
                            />
                          </InputGroup>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleEditModal}>
                        Edit{" "}
                      </Button>{" "}
                      <Button color="secondary" onClick={toggleEditModal}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>

                  {/* view Modal */}
                  <Modal
                    isOpen={showViewModal}
                    toggle={toggleViewModal}
                    className={className}
                  >
                    <ModalHeader toggle={toggleViewModal}>
                      View User
                    </ModalHeader>
                    <ModalBody>
                      <div className="p-1">
                        <span>Name: </span> <b>{viewData.name}</b>
                      </div>
                      <div className="p-1">
                        <span>Email: </span> <b>{viewData.email}</b>
                      </div>
                      <div className="p-1">
                        <span>Title: </span> <b>{viewData.role}</b>
                      </div>
                      <div className="p-1">
                        <span>Limit: </span> <b>{viewData.limit}</b>
                      </div>
                    </ModalBody>
                  </Modal>
                </div>
              </div>

              <TableContainer component={Paper}>
                <Table
                  className={classes.table}
                  aria-label="custom pagination table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title"> Name</b>
                        </div>
                        <input className="tableCell-top-input-user" placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Email</b>
                        </div>
                        <input className="tableCell-top-input-user" placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Title</b>
                        </div>
                        <input className="tableCell-top-input-user" placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Limit</b>
                        </div>
                        <input className="tableCell-top-input-user" placeholder="Search" />
                      </TableCell>
                      <TableCell className="table-headers-tables">
                      <div className="tableCell-top">
                        <b className="tableCell-top-title">Action</b>
                        </div>
                        <input className="tableCell-top-input-user" placeholder="Search" />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? userData.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : userData
                    ).map((row, i) => (
                      <TableRow key={i} className={i % 2 == 0 ? "tableCell-bottom-dark" : "tableCell-bottom-light"}>
                        <TableCell className="tableCell-bottom">{row.name}</TableCell>
                        <TableCell className="tableCell-bottom">{row.email}</TableCell>
                        <TableCell className="tableCell-bottom">{row.role}</TableCell>
                        <TableCell className="tableCell-bottom">{row.limit}</TableCell>
                        <TableCell className="tableCell-bottom">
                          <a
                            onClick={() => viewModal(row)}
                            style={{ cursor: "pointer" }}
                            className="material-icons-outlined"
                          >
                            <VisibilityOutlinedIcon />
                          </a>
                          &nbsp; &nbsp; &nbsp;
                          <a
                            onClick={() => editUser(row)}
                            style={{ cursor: "pointer" }}
                            className="material-icons-outlined"
                          >
                            <EditOutlinedIcon />
                          </a>{" "}
                          &nbsp; &nbsp;
                          <a
                            onClick={handleClickOpen}
                            style={{ cursor: "pointer" }}
                            className="material-icons-outlined"
                          >
                            <DeleteOutlineOutlinedIcon />
                          </a>{" "}
                        </TableCell>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title"
                        >
                          <DialogTitle
                            style={{ cursor: "move" }}
                            id="draggable-dialog-title"
                          >
                            Delete
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Are you sure to delete ?
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              color="primary"
                              autoFocus
                              onClick={handleClose}
                            >
                              Cancel
                            </Button>
                            <Button color="danger" onClick={handleClose}>
                              Yes
                            </Button>
                          </DialogActions>
                        </Dialog>
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
                        count={userData.length}
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
                  <ExportCSV csvData={rows} fileName={fileName} />
                </div>
              </TableContainer>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default User
