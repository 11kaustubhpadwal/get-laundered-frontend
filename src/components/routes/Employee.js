import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import EmployeeInfo from "../children-components/employee page/EmployeeInfo";
import Orders from "../children-components/employee page/Orders";
import ToastMessage from "../common/ToastMessage";
import SuccessToast from "../children-components/profile page/SuccessToast";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../common/Loader";
import {
  getOrdersList,
  cancelOrderEmployee,
  completeOrderEmployee,
} from "../../actions/orderActions";

const Employee = ({
  auth: { isAuthenticated, user },
  getOrdersList,
  orders,
  cancelOrderEmployee,
  completeOrderEmployee,
}) => {
  const {
    orderCancelled,
    orderCancellingError,
    orderCompleted,
    orderCompletionError,
  } = orders;

  useEffect(() => {
    getOrdersList();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (
    (isAuthenticated && user === null) ||
    (isAuthenticated && orders === [])
  ) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg">
      <Navbar />
      {orderCancelled !== null && <SuccessToast msg={orderCancelled} />}
      {orderCancellingError !== null && (
        <ToastMessage msg={orderCancellingError} />
      )}
      {orderCompleted !== null && <SuccessToast msg={orderCompleted} />}
      {orderCompletionError !== null && (
        <ToastMessage msg={orderCompletionError} />
      )}
      <EmployeeInfo user={user} />
      <Orders
        orders={orders}
        cancelOrder={cancelOrderEmployee}
        completeOrder={completeOrderEmployee}
      />
      <Footer />
    </Container>
  );
};

Employee.propTypes = {
  auth: PropTypes.object.isRequired,
  orders: PropTypes.object.isRequired,
  getOrdersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  orders: state.order,
});

export default connect(mapStateToProps, {
  getOrdersList,
  cancelOrderEmployee,
  completeOrderEmployee,
})(Employee);
