import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import EmployeeInfo from "../children-components/employee page/EmployeeInfo";
import Orders from "../children-components/employee page/Orders";

const orders = {
  orders: [
    {
      _id: "5f314968df593700178944f0",
      orderStatus: "In progress",
      orderNumber: "A24A130",
      referenceNumber: "5f314949df593700178944ef",
      firstName: "Lisa",
      lastName: "Ann",
      service: "Washing",
      optionalService: "false",
      quantity: 15,
      numberOfClothes: 0,
      pickupDate: "2020-08-11",
      pickupTime: "15:19",
      address: "Ul. Unicka 5, 908, 20-180.",
      paymentMethod: "Card",
      totalAmount: 17,
      placedOn: 1597065576393,
      __v: 0,
    },
  ],
};

const Employee = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <EmployeeInfo />
      <Orders
        orders={orders}
        cancelOrder={() => {
          console.log("order cancelled.");
        }}
        completeOrder={() => {
          console.log("order completed.");
        }}
      />
      <Footer />
    </Container>
  );
};

export default Employee;
