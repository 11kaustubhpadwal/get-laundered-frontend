import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Information from "../children-components/about page/Information";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Information />
      <Footer />
    </Container>
  );
};

export default About;
