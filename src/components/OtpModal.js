import React, { useState } from "react";
import ReactDom from "react-dom";
import "../styles/otp.css";
import { RiCloseLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";

const OtpModal = ({ open, onClose }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [login, setLogin] = useState(false);

  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    if (mobile.length < 10) {
      alert("Invalid Phone Number");
      setMobile("");
    } else {
      configureCaptcha();
      const phoneNumber = "+91" + mobile;
      console.log(phoneNumber);

      const appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("OTP has been Sent");
          alert("OTP Sent");
          // ...
        })
        .catch((error) => {
          alert(error.message);
          setMobile("");
          console.log("OTP Not Sent");
        });
    }
  };

  const SubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(otp);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("Successfull Login");
        setLogin((prev) => !prev);

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert("Unsuccessfull Login");
        setMobile("");
        setOtp("");
      });
  };
  if (!open) return null;

  return (
    <>
      <div className="otp-overlay position-fixed top-0 start-0 bottom-0 end-0"></div>
      <div className="otp-style position-fixed  ">
        <button className="close-btn h3 mt-1" onClick={onClose}>
          <RiCloseLine />
        </button>
        <div className="otp-class d-flex flex-column justify-content-center align-items-center mt-0">
          <div className="otp-logo text-white rounded-circle">C</div>
          <br />
          <form
            className="d-flex flex-column justify-content-center align-items-center"
            onSubmit={onSignInSubmit}
          >
            <div id="sign-in-button"></div>
            <input
              className="otp-input mt-1 mb-2"
              type="number"
              name="phone"
              value={mobile}
              placeholder="Enter Phone Number"
              onChange={(e) => {
                console.log(e.target.value);
                setMobile(e.target.value);
              }}
            />
            <button className="btn mt-2 btn-primary btn-sm  text-dark text-center">
              Request OTP
            </button>
          </form>
          <form
            className="d-flex flex-column justify-content-center align-items-center"
            onSubmit={SubmitOtp}
          >
            <br />
            <input
              className="otp-input mt-3 mb-2"
              type="number"
              value={otp}
              name="otp"
              placeholder="Enter OTP"
              onChange={(e) => {
                console.log(e.target.value);
                setOtp(e.target.value);
              }}
            />
            <button
              className="verify btn btn-primary btn-sm mt-2  text-black text-dark"
              type="submit"
            >
              Verify Otp
              {/* <NavLink exact to="/boarding">Verify</NavLink> */}
            </button>
            {login && (
              <button
                className="verify btn btn-primary btn-sm mt-4  text-black text-dark"
                type="submit"
              >
                <NavLink exact to="/doctorProfile">
                  Continue to Next Page
                </NavLink>
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpModal;
