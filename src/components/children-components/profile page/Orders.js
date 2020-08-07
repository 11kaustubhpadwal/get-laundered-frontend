import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import OrdersList from "./OrdersList";
import FormPopup from "./FormPopup";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    [theme.breakpoints.down("xs")]: {
      minWidth: "12rem",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    [theme.breakpoints.down("xs")]: {
      width: "2rem",
      marginLeft: "5px",
      marginBottom: "10px",
    },
  },
}));

const Orders = ({ orders, placeOrder, cancelOrder }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "60px",
      }}
    >
      <Card className={classes.root} style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5">
            All orders
            <span style={{ float: "right" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                className={classes.button}
              >
                Place new order
              </Button>
            </span>
          </Typography>
        </CardContent>
      </Card>
      <OrdersList orders={orders} cancelOrder={cancelOrder} />
      <FormPopup open={open} onClose={handleClose} placeOrder={placeOrder} />
    </div>
  );
};

Orders.propTypes = {
  orders: PropTypes.object.isRequired,
  placeOrder: PropTypes.func.isRequired,
  cancelOrder: PropTypes.func.isRequired,
};

export default Orders;
