import React, { useState } from 'react';
import './EnquiryForm.css';
import journey from '../../assests/chooseus.jpg';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ph: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State for pop-up
  const [loading, setLoading] = useState(false); // State for loader

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.ph) formErrors.ph = 'Phone Number is required';
    else if (!/^\d{10}$/.test(formData.ph)) formErrors.ph = 'Phone Number must be 10 digits';
    if (!formData.service) formErrors.service = 'Please select a service';
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);  // Show loader
      const scriptURL = "https://script.google.com/macros/s/AKfycbw_Faht2tfAkAu_jWpev77nZ3WUshJDsu_NaQrlpsB9r_ZlEqoa8MxG83sQ_KMyaG_l/exec";
      
      // Send form data to Google Sheets
      fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      })
      .then(() => {
        console.log('Form submitted', formData);
        setIsSubmitted(true);  // Show the pop-up
        setLoading(false);  // Hide loader
        setFormData({          // Reset the form
          name: '',
          email: '',
          ph: '',
          service: '',
          message: '',
        });
      })
      .catch(error => {
        console.error('Error!', error.message);
        setLoading(false);  // Hide loader on error
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="enquiry-form-container">
      <div className="header">
        <h2 style={{ color: 'red' }}>Enquiry</h2>
        <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>Start Your Journey Today</h1>
      </div>
      <div className="form-image-container">
        <div className="form-container">
          <form 
            onSubmit={handleSubmit} 
            noValidate
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                className={errors.ph ? 'error' : ''}
                required
              />
              {errors.ph && <span className="error-text">{errors.ph}</span>}
            </div>
            <div className="form-group">
              <label>Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={errors.service ? 'error' : ''}
                required
              >
                <option value="">Select Service</option>
                <option value="training">Training</option>
                <option value="overseas-education">Overseas Education</option>
                <option value="immigration">Immigration</option>
                <option value="travel-agency">Travel Agency</option>
                <option value="Work visa  for Europe ">Work visa  for Europe</option>
                <option value="Australia PR & Work visa">Australia PR & Work visa</option>
              </select>
              {errors.service && <span className="error-text">{errors.service}</span>}
            </div>
            <div className="form-group">
              <label>Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {loading && (
            <div className="loader">
              <div className="spinner"></div>
            </div>
          )}
        </div>
        <div className="image-container">
          <div className="image-card">
            <img src={journey} alt="Journey" />
          </div>
        </div>
      </div>

      {isSubmitted && (
        <div className="popup">
          <p>Thank you for your enquiry! We will get back to you soon.</p>
          <button onClick={() => setIsSubmitted(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
