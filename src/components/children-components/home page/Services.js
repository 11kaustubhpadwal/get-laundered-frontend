import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Washing from "../../../assets/washing.svg";
import Drying from "../../../assets/drying.svg";
import Bleaching from "../../../assets/bleaching.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  services: {
    textAlign: "center",
  },
  root: {
    maxWidth: "20rem",
  },
}));

const Services = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "60px",
        marginTop: "50px",
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
        <Card className={classes.services}>
          <CardActionArea>
            <CardContent>
              <img
                src={Washing}
                alt="Washing"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Washing
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Clothes washing from 17 PLN (20kg).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to="/washing" style={{ textDecoration: "none" }}>
              <Button size="small" color="black">
                choose
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
        <Card className={classes.services}>
          <CardActionArea>
            <CardContent>
              <img
                src={Drying}
                alt="Drying"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Drying
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Clothes drying from 7 PLN (20kg).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to="/drying" style={{ textDecoration: "none" }}>
              <Button size="small" color="black">
                choose
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
        <Card className={classes.services}>
          <CardActionArea>
            <CardContent>
              <img
                src={Bleaching}
                alt="Bleaching"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Bleaching
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Clothes bleaching from 5 PLN.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to="/bleaching" style={{ textDecoration: "none" }}>
              <Button size="small" color="black">
                choose
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
