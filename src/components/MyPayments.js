import React from "react";
import "../styles/MyPayments.css";
function MyPayments() {
  return (
    <>
      <div className="payments">
        <h5>PAYMENTS NAVIGATION </h5>
        <h6 className="headingSix">INVOICES </h6>
        <h6 className="heading6">MY BANKS DETAILS</h6>
      </div>
      <div className="paymentDates">
        <p>
          {" "}
          Payment Date: <b>Oct 25,2022,11:07 a.m.</b> Amount Paid <b>₹3150</b>
        </p>
        <p> Payment Made For Project </p>
        <p> k10 Maths Text Book Solution </p>
        <p> k10 Maths Text Book Solution </p>
      </div>
      <div className="earning">
        <h6>Lifetime Earing </h6>
        <p>
          <b>₹3150</b>
        </p>
        <h6>This Month Earning</h6>
        <p>
          {" "}
          <b>₹0</b>
        </p>
      </div>
    </>
  );
}

export default MyPayments;
