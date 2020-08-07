import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import WashingService from "../children-components/washing service info page/WashingService";
import GeneralInstruction from "../common/GeneralInstruction";

const Washing = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <div
        style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}
      >
        <h1>Washing</h1>
        <div>
          <h3>The following options for washing clothes are available - </h3>
          <WashingService />
          <GeneralInstruction />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Washing;
