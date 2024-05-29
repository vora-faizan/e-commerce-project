import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const [verificationCode, setVerificationCode] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/login',
      {
          method:'post',
    
          
         //body:JSON.stringify(data)
      });
         const responseData = response;
          console.log(responseData.success);
          //console.log("bhgbh");
          
  } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/login',
      {
          method:'GET',
      
          
         //body:JSON.stringify(data)
      });
         const responseData = response;
          console.log(responseData.success);
          //console.log("bhgbh");
          
  } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!loggedIn ? (
        <form onSubmit={handleSubmit(handleLogin)}>
          <label>Phone Number:</label>
          <input {...register('mobile')} type="text" />
          <button className='btn1' type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <label>Verification Code:</label>
          <input
            type="text"
           
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;