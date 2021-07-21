import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import OtpModal from "../components/OtpModal"
import "../styles/login.css"
const Login = () => {
    const [otpOpen, setOtpOpen] = useState(false);
    return (
        <div className="vh-100 vw-100">
            <div className="login-container w-100 h-100 position-relative">
            <div className="dark-overlay position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="logo-background w-100 position-absolute top-0 start-0">
            <div className="logo-box  text-white fw-normal border border-white border-4 text-center position-absolute rounded-3">
            C
          </div>
          <div className="otp position-relative text-white p-3 fs-1 d-flex justify-content-evenly align-items-center">
          <FaPhoneAlt />
          <button className="tap btn btn-primary shadow-none text-white  " onClick={ () => setOtpOpen(true)}>
            Tap to request OTP
            
          </button>
          </div>
          <OtpModal open = {otpOpen} onClose = { () => setOtpOpen(false)}/>
            </div>
            </div>
            
        </div>
    )
}

export default Login
