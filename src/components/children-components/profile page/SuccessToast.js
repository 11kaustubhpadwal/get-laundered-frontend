import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "75%",
    minWidth: "15rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
}));

const SuccessToast = ({ msg }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success">{msg}</Alert>
    </div>
  );
};

export default SuccessToast;
