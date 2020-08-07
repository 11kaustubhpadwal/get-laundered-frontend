import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import NewOrderForm from "./NewOrderForm";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPopup = (props) => {
  const { onClose, open } = props;

  const { placeOrder } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      onClose={handleClose}
      open={open}
      fullScreen={fullScreen}
    >
      <NewOrderForm handleClose={handleClose} placeOrder={placeOrder} />
    </Dialog>
  );
};

FormPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  placeOrder: PropTypes.func.isRequired,
};

export default FormPopup;
