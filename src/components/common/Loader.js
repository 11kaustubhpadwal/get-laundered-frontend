import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
  },
}));

const Loader = ({ customStyle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={customStyle}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
