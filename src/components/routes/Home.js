import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Description from "../children-components/home page/Description";
import Services from "../children-components/home page/Services";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Description />
      <Services />
      <Footer />
    </Container>
  );
};

export default Home;
