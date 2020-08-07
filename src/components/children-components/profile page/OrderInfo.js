import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OrderInfo = ({ order }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        View
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Typography
            variant="h6"
            style={{ marginBottom: "20px" }}
          >{`Order number - ${order.orderNumber}`}</Typography>
          <Typography variant="h6" style={{ marginBottom: "20px" }}>
            {`Status - `}{" "}
            <Chip
              label={order.orderStatus}
              color={
                order.orderStatus === "Cancelled"
                  ? "secondary"
                  : order.orderStatus === "Completed"
                  ? "default"
                  : "primary"
              }
            />
          </Typography>
          <Divider style={{ marginBottom: "20px" }} />
          <Typography
            variant="h6"
            style={{ marginBottom: "20px" }}
          >{`Placed by - ${order.firstName} ${order.lastName}`}</Typography>
          <Typography variant="h6">{`Service - ${order.service}`}</Typography>
          {order.quantity !== 0 && (
            <Typography variant="h6">{`Quantity - ${order.quantity} kg`}</Typography>
          )}
          {order.optionalService === "true" && (
            <Typography
              variant="h6"
              style={{ marginTop: "15px" }}
            >{`Optional service - Drying`}</Typography>
          )}
          {order.numberOfClothes !== 0 && (
            <Typography variant="h6">{`Number of clothes - ${order.numberOfClothes}`}</Typography>
          )}
          <Typography
            variant="h6"
            style={{ marginTop: "20px" }}
          >{`Pickup date - ${order.pickupDate}`}</Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: "20px" }}
          >{`Pickup time - ${order.pickupTime}`}</Typography>
          <Typography
            variant="h6"
            style={{ marginBottom: "20px" }}
          >{`Pickup and delivery address - ${order.address}`}</Typography>
          <Divider style={{ marginBottom: "20px" }} />
          <Typography variant="h6">{`Payment method - ${order.paymentMethod} on delivery`}</Typography>
          <Typography variant="h6">{`Total amount - ${order.totalAmount} PLN`}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="black">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

OrderInfo.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderInfo;
