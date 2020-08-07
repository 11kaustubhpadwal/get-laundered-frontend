import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PasswordReset = ({ open, handleClose, sendEmail }) => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    sendEmail(email);
    setEmail("");
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Forgot password?"}
        </DialogTitle>
        <DialogContent>
          <p style={{ marginBottom: "20px", marginTop: 0 }}>
            Please enter your email address to get the link to reset your
            account's password.
          </p>
          <TextField
            label="Email Address"
            type="email"
            autoFocus
            required
            fullWidth
            value={email}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClick}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

PasswordReset.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
};

export default PasswordReset;
