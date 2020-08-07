import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PersonalInfo from "../children-components/profile page/PersonalInfo";
import Orders from "../children-components/profile page/Orders";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../common/Loader";
import { updateInfo } from "../../actions/authActions";
import { getOrders, placeOrder, cancelOrder } from "../../actions/orderActions";
import ToastMessage from "../common/ToastMessage";
import SuccessToast from "../children-components/profile page/SuccessToast";

const Profile = ({
  auth: { isAuthenticated, user, error },
  updateInfo,
  orders,
  getOrders,
  placeOrder,
  cancelOrder,
}) => {
  useEffect(() => {
    getOrders();
  }, []);

  const {
    orderCancelled,
    orderPlaced,
    getOrdersError,
    orderPlacingError,
    orderCancellingError,
  } = orders;

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
      {error !== null && (
        <ToastMessage msg={"Please provide both first and last names."} />
      )}
      {orderCancelled !== null && <SuccessToast msg={orderCancelled} />}
      {orderPlaced !== null && <SuccessToast msg={orderPlaced} />}
      {orderPlacingError !== null && <ToastMessage msg={orderPlacingError} />}
      {orderCancellingError !== null && (
        <ToastMessage msg={orderCancellingError} />
      )}
      {getOrdersError !== null && <ToastMessage msg={getOrdersError} />}
      <PersonalInfo user={user} updateInfo={updateInfo} />
      <Orders
        orders={orders}
        placeOrder={placeOrder}
        cancelOrder={cancelOrder}
      />
      <Footer />
    </Container>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  orders: state.order,
});

export default connect(mapStateToProps, {
  updateInfo,
  getOrders,
  placeOrder,
  cancelOrder,
})(Profile);
