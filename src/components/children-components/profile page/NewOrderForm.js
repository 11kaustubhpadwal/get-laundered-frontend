import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PaymentIcon from "@material-ui/icons/Payment";
import MoneyIcon from "@material-ui/icons/Money";
import PropTypes from "prop-types";
import ToastMessage from "../../common/ToastMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "26rem",
    margin: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      width: "23rem",
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 200,
  },
  formControl: {
    minWidth: 120,
  },
}));

const NewOrderForm = (props) => {
  const classes = useStyles();

  const { placeOrder } = props;

  const [error, setError] = useState(false);

  const [requiredService, setRequiredService] = useState(null);
  const [washing, setWashing] = useState(false);
  const [bleaching, setBleaching] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [drying, setDrying] = useState(false);
  const [disableSelection, setDisableSelection] = useState(false);
  const [cardPayment, setCardPayment] = useState(false);
  const [cashPayment, setCashPayment] = useState(false);
  const [requiredAttributeCard, setRequiredAttributeCard] = useState(true);
  const [requiredAttributeCash, setRequiredAttributeCash] = useState(true);
  const [finalAmount, setFinalAmount] = useState(0);
  const [otherDetails, setOtherDetails] = useState({
    firstName: "",
    lastName: "",
    dateTime: "",
    address: "",
  });

  const handleServiceChange = (event) => {
    if (event.target.value === "Washing") {
      setWashing(true);
      setBleaching(false);
      setDisableSelection(false);
      if (quantity !== 0) {
        setFinalAmount(quantity);
      }
    }
    if (event.target.value === "Bleaching") {
      setWashing(false);
      setBleaching(true);
      setDisableSelection(true);
      setFinalAmount(0);
    }

    setRequiredService(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setFinalAmount(event.target.value);
  };

  const handleClothesChange = (event) => {
    setClothes(event.target.value);
    setFinalAmount(event.target.value * 5);
  };

  const handleDryingChange = () => {
    if (!drying) {
      setDrying(true);

      if (finalAmount === 17) {
        setFinalAmount(17 + 7);
      } else if (finalAmount === 27) {
        setFinalAmount(27 + 14);
      } else if (finalAmount === 37) {
        setFinalAmount(37 + 21);
      } else {
        setFinalAmount(finalAmount);
      }
    } else {
      setDrying(false);

      if (finalAmount === 17 + 7) {
        setFinalAmount(17);
      } else if (finalAmount === 27 + 14) {
        setFinalAmount(27);
      } else if (finalAmount === 37 + 21) {
        setFinalAmount(37);
      } else {
        setFinalAmount(finalAmount);
      }
    }
  };

  const handlePaymentSelection = (event) => {
    if (event.target.name === "card") {
      setRequiredAttributeCash(false);
      setCardPayment(true);
      setCashPayment(false);
    }
    if (event.target.name === "cash") {
      setRequiredAttributeCard(false);
      setCardPayment(false);
      setCashPayment(true);
    }
  };

  const handleOtherDetails = (prop) => (event) => {
    setOtherDetails({ ...otherDetails, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (finalAmount !== 0 || finalAmount > 0) {
      let pickupDate = otherDetails.dateTime.toString().slice(0, 10);
      let pickupTime = otherDetails.dateTime.toString().slice(11, 16);

      let paymentMethod = "";
      if (cardPayment === true) {
        paymentMethod = "Card";
      }
      if (cashPayment === true) {
        paymentMethod = "Cash";
      }

      let quantityFinal = 0;
      if (quantity === 17) {
        quantityFinal = 15;
      } else if (quantity === 27) {
        quantityFinal = 25;
      } else if (quantity === 37) {
        quantityFinal = 35;
      }

      let formData = {
        firstName: otherDetails.firstName,
        lastName: otherDetails.lastName,
        service: requiredService,
        quantity: quantityFinal,
        numberOfClothes: clothes,
        optionalService: drying,
        pickupDate: pickupDate,
        pickupTime: pickupTime,
        address: otherDetails.address,
        paymentMethod: paymentMethod,
        totalAmount: finalAmount,
      };

      placeOrder(formData);
      props.handleClose();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 8000);
    }
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <p style={{ fontWeight: 600 }}>Please enter your personal details - </p>
        <TextField
          required
          name="firstName"
          label="First name"
          style={{ marginRight: "15px" }}
          value={otherDetails.firstName}
          onChange={handleOtherDetails("firstName")}
        />
        <TextField
          required
          name="lastName"
          label="Last name"
          value={otherDetails.lastName}
          onChange={handleOtherDetails("lastName")}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>Please select a service - </p>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Service *</InputLabel>
          <Select
            value={requiredService}
            onChange={handleServiceChange}
            label="Service"
          >
            <MenuItem value={"Washing"}>Washing</MenuItem>
            <MenuItem value={"Bleaching"}>Bleaching</MenuItem>
          </Select>
        </FormControl>
        {washing && (
          <Fragment>
            <p style={{ fontWeight: 600 }}>Please select quantity - </p>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Quantity *</InputLabel>
              <Select
                value={quantity}
                onChange={handleQuantityChange}
                label="Quantity"
              >
                <MenuItem value={17}>15 kg</MenuItem>
                <MenuItem value={27}>25 kg</MenuItem>
                <MenuItem value={37}>35 kg</MenuItem>
              </Select>
            </FormControl>
          </Fragment>
        )}
        {bleaching && (
          <Fragment>
            <p style={{ fontWeight: 600 }}>
              Please enter the number of clothes -{" "}
            </p>
            <TextField
              value={clothes}
              onChange={handleClothesChange}
              required
              id="standard-basic"
              label="Number of clothes"
            />
          </Fragment>
        )}
        <div style={{ marginTop: "30px" }}>
          <p style={{ fontWeight: 600 }}>
            Please select if you want the optional drying service -{" "}
          </p>
          {disableSelection ? (
            <FormControlLabel
              control={
                <Checkbox
                  disabled
                  checked={drying}
                  onChange={handleDryingChange}
                  name="drying"
                  color="primary"
                />
              }
              label="Drying"
            />
          ) : (
            <FormControlLabel
              control={
                <Checkbox
                  checked={drying}
                  onChange={handleDryingChange}
                  name="drying"
                  color="primary"
                />
              }
              label="Drying"
            />
          )}
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>
          Please select a date and time for pickup -{" "}
        </p>
        <TextField
          id="datetime-local"
          required
          label="Pickup date and time"
          type="datetime-local"
          defaultValue="2020-01-01T12:00"
          value={otherDetails.dateTime}
          onChange={handleOtherDetails("dateTime")}
          className={(classes.textField, classes.container)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>
          Please enter your address for pickup and delivery -{" "}
        </p>
        <TextField
          required
          fullWidth
          label="Address for pickup and delivery"
          multiline
          rows={4}
          variant="outlined"
          value={otherDetails.address}
          onChange={handleOtherDetails("address")}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>Please select a payment method -</p>
        <FormControlLabel
          control={
            <Checkbox
              icon={<PaymentIcon />}
              checked={cardPayment}
              onChange={handlePaymentSelection}
              name="card"
              color="primary"
              required={requiredAttributeCard}
            />
          }
          label="Card on delivery"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<MoneyIcon />}
              checked={cashPayment}
              onChange={handlePaymentSelection}
              name="cash"
              color="primary"
              required={requiredAttributeCash}
            />
          }
          label="Cash on delivery"
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p>
          <strong>Total - {finalAmount} PLN</strong>
        </p>
      </div>
      <div style={{ marginTop: "30px" }}>
        {error !== false && (
          <ToastMessage
            msg={"Please fill out all the fields in the form correctly."}
          />
        )}
      </div>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        type="submit"
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px", marginLeft: "20px" }}
        onClick={props.handleClose}
      >
        Cancel
      </Button>
    </form>
  );
};

NewOrderForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
  placeOrder: PropTypes.func.isRequired,
};

export default NewOrderForm;
