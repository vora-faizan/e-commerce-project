import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [send, setSend] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    
  };

  const handleuserName = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resolved ={

      // otp,
   
     body:JSON.stringify({
      phone:phoneNumber,
      userName:userName,
     })
      
    }
    try {
      const response = await fetch('http://localhost:3000/api/v1/users/singup',
      
      
      {
       method:"POST",
       
      }).then((e,e1)=>{
        console.log('e',e);
        console.log('e1',e1);


     });
     //const data = await response.json();
        // const data = response;
          console.log(response);

        
          console.log("Succes");
          
          
  } catch (e) {
      // Handle errors
      console.log('Error fetching API:', e);
      //method:'POST',
      resolved.e= e.data.statusText == 'Unauthorized' ? 'Unauthorized' : e;
      
      console.log("Fsfsf");
      
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <br />
      <label>
        Username
        <input type="text" value={userName} onChange={handleuserName} />
      </label>
      <br />
      <button type="submit" >Login</button>
    </form>
  );
};

export default LoginForm;
