import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BleachingImage from "../../../assets/bleachingService.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  services: {
    textAlign: "center",
  },
  root: {
    maxWidth: "20rem",
  },
});

const BleachingService = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "60px",
        marginTop: "50px",
      }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.root}>
        <Card className={classes.services}>
          <CardActionArea>
            <CardContent>
              <img
                src={BleachingImage}
                alt="15 kg"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Quantity - 1
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Price - 5 PLN.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              justifyContent: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
            }}
          >
            Bleaching of clothes for stain removal costs 5 PLN per piece of
            cloth (for e.g. Shirt, Jeans, etc.).
          </CardActions>
          <CardActions
            style={{
              justifyContent: "center",
            }}
          ></CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BleachingService;
