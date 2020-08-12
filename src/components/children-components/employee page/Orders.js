import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";
import OrderInfo from "../profile page/OrderInfo";
import ConfirmOrderCancel from "./ConfirmOrderCancel";
import ConfirmOrderComplete from "./ConfirmOrderComplete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Orders = ({ orders, cancelOrder, completeOrder }) => {
  const classes = useStyles();

  if (orders.orders.length === 0) {
    return (
      <div
        style={{
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "60px",
        }}
      >
        <h3 style={{ marginTop: "70px", textAlign: "center" }}>
          There are no orders available yet. All orders will appear here once
          customers start to place them.
        </h3>
      </div>
    );
  } else {
    return (
      <TableContainer
        component={Paper}
        style={{
          width: "75%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "50px",
        }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order number</TableCell>
              <TableCell align="center">Details</TableCell>
              <TableCell align="center">Placed on</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Complete</TableCell>
              <TableCell align="center">Cancel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.orders.map(
              (order) =>
                order.orderStatus === "In progress" && (
                  <TableRow key={order._id}>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell align="center">
                      <OrderInfo order={order} />
                    </TableCell>
                    <TableCell align="center">
                      {order.placedOn.toString().slice(0, 10)}
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={order.orderStatus}
                        variant="outlined"
                        color="default"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ConfirmOrderComplete
                        orderID={order._id}
                        completeOrder={completeOrder}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <ConfirmOrderCancel
                        orderID={order._id}
                        cancelOrder={cancelOrder}
                      />
                    </TableCell>
                  </TableRow>
                )
            )}
            {orders.orders.map(
              (order, index) =>
                order.orderStatus === "Completed" && (
                  <TableRow key={index}>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell align="center">
                      <OrderInfo order={order} />
                    </TableCell>
                    <TableCell align="center">
                      {order.placedOn.toString().slice(0, 10)}
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={order.orderStatus} color="primary" />
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="default" disabled>
                        Complete
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="secondary" disabled>
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                )
            )}
            {orders.orders.map(
              (order, index) =>
                order.orderStatus === "Cancelled" && (
                  <TableRow key={index}>
                    <TableCell>{order.orderNumber}</TableCell>
                    <TableCell align="center">
                      <OrderInfo order={order} />
                    </TableCell>
                    <TableCell align="center">
                      {order.placedOn.toString().slice(0, 10)}
                    </TableCell>
                    <TableCell align="center">
                      <Chip label={order.orderStatus} color="secondary" />
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="default" disabled>
                        Complete
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="secondary" disabled>
                        Cancel
                      </Button>
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

Orders.propTypes = {
  orders: PropTypes.object.isRequired,
  cancelOrder: PropTypes.func.isRequired,
};

export default Orders;
