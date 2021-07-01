import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { GET, UPDATE } from "configuration/API-Instance"
import moment from "moment"


const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
   console.log(row)
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.number}</TableCell>
        <TableCell align="center">{row.customer.number}</TableCell>
        <TableCell align="center">{row.customer.name}</TableCell>
        <TableCell align="center">{row.customer.city}</TableCell>
        <TableCell align="center">{row.p_no}</TableCell>
        <TableCell align="center">{row.location}</TableCell>
        <TableCell align="center">{moment(row.orderDate).format("DD/MM/YY")}</TableCell>
        <TableCell align="center">{moment(row.deliveryDate).format("DD/MM/YY")}</TableCell>
        <TableCell align="center">{row.order_date}</TableCell>
        <TableCell align="center">{row.delivery_window}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.alerts}</TableCell>
        
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Order Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Order Id</TableCell>
                    <TableCell align="center">Dilevery Date</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                   {console.log(row.order_detials)}
                  {row.order_detials.map((details,i) => (
                    <TableRow key={i}>
                      <TableCell align="center">
                        {details.quantity}
                      </TableCell>
                      <TableCell align="center">{details.order_id}</TableCell>
                      <TableCell align="center">{moment(details.dilivery_date).format("DD-MM-YY, h:mm:ss a")}</TableCell>
                      <TableCell align="center">{details.status}</TableCell>
                        {/* <TableCell align="center">
                         {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default function CollapsibleTable() {

  const [orderData, setOrderData] = useState([])


  let temp = []
  const getOrder = () => {
    GET('/orders')
      .then(response => {
        temp = response.data.response.orders
        setOrderData(temp)
      })
  }


  useEffect(() => {
    getOrder()
    
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Order Number</TableCell>
            <TableCell>Customer Number</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Customer Location</TableCell>
            <TableCell>PO Number</TableCell>
            <TableCell>Rack Location</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Delivery Date</TableCell>
            <TableCell>Delivery Window</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Alerts</TableCell>
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {!!orderData && orderData.map((row, i) => (
            <Row key={i} row={row} />
            // <h1>{console.log("row", row)}</h1>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}