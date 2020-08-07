import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import LoginForm from "../children-components/login page/LoginForm";

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <LoginForm />
      <Footer />
    </Container>
  );
};

export default Login;
