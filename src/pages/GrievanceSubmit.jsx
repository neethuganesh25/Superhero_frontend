
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Grievancesubmit.css'; 

const GrievanceSubmit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    title: '',
    description: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://superhero-mrqq.vercel.app/api/grievances/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        
        setSuccessMessage('Grievance submitted successfully');

           
      } else {
        const error = await response.json();
        setErrorMessage(error.message);
        //alert('submited')
        setFormData({
          name: '',
          email: '',
          date: '',
          title: '',
          description: '',
        });
        

      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while submitting the grievance');
    }
  };

  return (
    <div className="grievance-submit-container">
      <h2 className="text-center">Submit Your Grievance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Grievance Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Submit Grievance</button>
      </form>

      
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      
      
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </div>
  );
};

export default GrievanceSubmit;
