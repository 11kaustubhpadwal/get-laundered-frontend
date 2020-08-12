import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

const EmployeeInfo = ({ user }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "50px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Manage orders</h1>
      </div>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Employee details
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "30px" }}
            >
              {user.firstName + " " + user.lastName}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{ marginTop: "10px" }}
            >
              Employee ID - <strong>{user.employeeID}</strong>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmployeeInfo;
