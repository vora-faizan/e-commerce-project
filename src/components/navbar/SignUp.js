import React, { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset validation error when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { firstname: '', lastname: '', phonenumber: '', email: '', password: '', confirmPassword: '' };

    // Name validation
    if (!formData.firstname.trim()) {
      newErrors.firstname = 'Firstname is required';
      isValid = false;
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = 'Lastname is required';
      isValid = false;
    }

    // Phone number validation
    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = 'Phonenumber is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = 'Invalid phone number';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform registration logic here
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has validation errors. Please correct them.');
    }
  };

  return (
    <div>
      <div>
      <div class="slider-area ">
      <div class="single-slider slider-height2 d-flex align-items-center">
          <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="hero-cap text-center">
                          <h2>Signup</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
        <section class="login_part section_padding ">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-12 col-md-12">
                <div class="login_part_form">
                  <div class="login_part_form_iner">
                    <h3>Welcome <br />
                      Please Sign up now</h3>
                    <form class="row contact_form" onSubmit={handleSubmit} noValidate="novalidate">
                      <div class="col-md-12 form-group p_star">
                        <input
                          type="text"
                          class={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                          id="firstname"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleChange}
                          placeholder="Firstname"
                        />
                        {errors.firstname && <div class="invalid-feedback">{errors.firstname}</div>}
                      </div>
                      <div class="col-md-12 form-group p_star">
                        <input
                          type="text"
                          class={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                          id="lastname"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          placeholder="Lastname"
                        />
                        {errors.lastname && <div class="invalid-feedback">{errors.lastname}</div>}
                      </div>
                      <div class="col-md-12 form-group p_star">
                        <input
                          type="text"
                          class={`form-control ${errors.phonenumber ? 'is-invalid' : ''}`}
                          id="phonenumber"
                          name="phonenumber"
                          value={formData.phonenumber}
                          onChange={handleChange}
                          placeholder="Phonenumber"
                        />
                        {errors.phonenumber && <div class="invalid-feedback">{errors.phonenumber}</div>}
                      </div>
                      <div class="col-md-12 form-group p_star">
                        <input
                          type="text"
                          class={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                        />
                        {errors.email && <div class="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div class="col-md-12 form-group p_star">
                        <input
                          type="password"
                          class={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password"
                        />
                        {errors.password && <div class="invalid-feedback">{errors.password}</div>}
                      </div>
                      <div class="col-md-12 form-group p_star">
                        <input
                          type="password"
                          class={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm Password"
                        />
                        {errors.confirmPassword && <div class="invalid-feedback">{errors.confirmPassword}</div>}
                      </div>
                      <div class="col-md-12 form-group">
                        <div class="creat_account d-flex align-items-center">
                          <input type="checkbox" id="f-option" name="selector" />
                          <label for="f-option">Remember me</label>
                        </div>
                        <button type="submit" value="submit" class="btn1 my-2" >
                          Sign up
                        </button>
                        
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
