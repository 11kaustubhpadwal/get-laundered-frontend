import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Login from "./components/routes/Login";
import Register from "./components/routes/Register";
import Washing from "./components/routes/Washing";
import Drying from "./components/routes/Drying";
import Bleaching from "./components/routes/Bleaching";
import Profile from "./components/routes/Profile";
import Employee from "./components/routes/Employee";
import PasswordResetScreen from "./components/routes/PasswordResetScreen";
import NotFound from "./components/common/NotFound";
import checkAuthToken from "./utils/checkAuthToken";

import { Provider } from "react-redux";
import store from "./store";
import { LOGIN_SUCCESS } from "./actions/types";
import { getUser } from "./actions/authActions";

let response = checkAuthToken();

if (response !== undefined) {
  store.dispatch(getUser());
  store.dispatch({
    type: LOGIN_SUCCESS,
    payload: localStorage.getItem("token"),
  });
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d5afe",
    },
    secondary: {
      main: "#f44336",
      complete: "#76ff03",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: { ...theme.typography.body1 },
}));

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/washing" component={Washing} />
              <Route exact path="/drying" component={Drying} />
              <Route exact path="/bleaching" component={Bleaching} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/employee" component={Employee} />
              <Route
                exact
                path="/forgot-password/:token"
                component={PasswordResetScreen}
              />
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
