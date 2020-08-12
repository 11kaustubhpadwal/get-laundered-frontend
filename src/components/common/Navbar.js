import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/car.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";

const useStyles = makeStyles((theme) => ({
  link: {
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  },
  logo: {
    width: "5rem",
  },
  root: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
      marginTop: "20px",
    },
    marginBottom: "35px",
  },
}));

const Navbar = ({ auth: { isAuthenticated, user }, logoutUser }) => {
  const classes = useStyles();

  const logout = () => {
    logoutUser();
  };

  if (isAuthenticated && user !== null) {
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <img src={Logo} alt="Logo" className={classes.logo}></img>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          {user.role === "User" && (
            <Link to="/profile" className={classes.link}>
              Profile
            </Link>
          )}
          {user.role === "Employee" && (
            <Link to="/employee" className={classes.link}>
              Profile
            </Link>
          )}
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="#" className={classes.link} onClick={logout}>
            Logout
          </Link>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <img src={Logo} alt="Logo" className={classes.logo}></img>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="/register" className={classes.link}>
            Register
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Grid>
      </Grid>
    );
  }
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
