import ButtonLink from "../common/ButtonLink";
 import Movefundlogo from "../assets/moveFundsLogo.svg"
import { Link } from "react-router-dom";
import EmailSender from "../assets/emailSender.svg"


import React, { useState, useEffect } from 'react';

const OTPPage = () => {
  const [timer, setTimer] = useState(300); 
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const [otp, setOtp] = useState(''); 
  const [error, setError] = useState(''); 
  const expectedOtp = ' '; 

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval); 
    } else {
      setIsResendEnabled(true);
    }
  }, [timer]);

  const handleVerifyOtp = () => {
    if (otp === expectedOtp) {
      console.log('OTP verified successfully!');
      setError('');
      
    } else {
      setError('Incorrect OTP. Please try again.');
    }
  };

  const handleResendOTP = () => {
    if (isResendEnabled) {
      setTimer(300); 
      setIsResendEnabled(false);
      setError(''); 
      setOtp(''); 
      console.log('Resending OTP...');
    }
  };

  
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
   
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
        <p className="text-gray-600 mb-4">We've sent an OTP to your Email.</p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleVerifyOtp}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Verify OTP
        </button>
        <div className="mt-4 text-center">
          {isResendEnabled ? (
            <button
              onClick={handleResendOTP}
              className="text-blue-500 hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-600">
              Resend OTP in <span className="font-bold">{formatTime(timer)}</span>
            </p>
          )}
        </div>
        <div className="justify-center flex pt-20  ">
    <Link to={'/'}>
    <ButtonLink 
      href="" 
      children={<img   className=
        "object-cover bg-white h-50 w-10 rounded border"
      src={Movefundlogo} 
      alt="MoveFunds"/>}
      />
      </Link>
   </div>
      </div>
       <div className=
"  h-[20vh] w-60 pt-10 bg-transparent  flex justify-center animate-pulse">
<img src={EmailSender} alt="" />
    </div> 
    </div>
  );
};

export default OTPPage;
