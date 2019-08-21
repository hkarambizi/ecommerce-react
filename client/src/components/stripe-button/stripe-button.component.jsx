import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceConvertedForStripe = price * 100; // in cents
  const publishableKey = "pk_test_6PADT7ui7H2G7957bJ5mW48R00mfJDMSnC";

  const onToken = token => {
    axios({
      method: "POST",
      url: "payment",
      data: {
        amount: priceConvertedForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment was successful!");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "Payment error occured. Please use the provided test credit card data"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Pop Shop"
      billingAddress
      shippingAddress
      image="https://image.flaticon.com/icons/png/128/607/607702.png"
      description={`Your total is $${price}`}
      amount={priceConvertedForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
