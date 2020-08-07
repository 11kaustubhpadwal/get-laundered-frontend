import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import ToastMessage from "../common/ToastMessage";
import SuccessToast from "../children-components/profile page/SuccessToast";

import { connect } from "react-redux";
import { verifyLink, updatePassword } from "../../actions/passwordResetActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "22rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  button: {
    width: "6rem",
  },
}));

const PasswordResetScreen = ({
  verifyLink,
  updatePassword,
  passwordReset: {
    verifyLinkError,
    verifyLinkSuccess,
    passwordUpdateSuccess,
    passwordUpdateError,
  },
}) => {
  let { token } = useParams();

  useEffect(() => {
    verifyLink(token);
  }, []);

  const classes = useStyles();

  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updatePassword(token, password);
    setPassword("");
  };

  return (
    <Container maxWidth="lg">
      <Navbar />
      {verifyLinkSuccess !== null && (
        <div
          style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}
        >
          {passwordUpdateError !== null && (
            <ToastMessage msg={passwordUpdateError} />
          )}
          {passwordUpdateSuccess !== null && (
            <SuccessToast msg={passwordUpdateSuccess} />
          )}
          <h1>Change your password</h1>
          <div style={{ marginTop: "30px" }}>
            <h3>Please enter your new password.</h3>
          </div>
          <form
            className={classes.root}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div
              style={{
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              <TextField
                required
                fullWidth
                type="password"
                id="standard-basic"
                label="Password"
                variant="outlined"
                value={password}
                inputProps={{ minLength: 8, maxLength: 20 }}
                onChange={handleInputChange}
              />
            </div>
            {passwordUpdateSuccess !== null && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ margin: "20px" }}
                type="submit"
                disabled
              >
                Submit
              </Button>
            )}
            {passwordUpdateSuccess === null && passwordUpdateError !== null && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ margin: "20px" }}
                type="submit"
              >
                Submit
              </Button>
            )}
            {passwordUpdateError === null && passwordUpdateSuccess === null && (
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ margin: "20px" }}
                type="submit"
              >
                Submit
              </Button>
            )}
          </form>
        </div>
      )}
      {verifyLinkError !== null && (
        <div
          style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}
        >
          <h1>{verifyLinkError}</h1>
        </div>
      )}
      <Footer />
    </Container>
  );
};

PasswordResetScreen.propTypes = {
  passwordReset: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ passwordReset: state.passwordReset });

export default connect(mapStateToProps, { verifyLink, updatePassword })(
  PasswordResetScreen
);
