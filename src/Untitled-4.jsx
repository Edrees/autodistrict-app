// AppointmentForm.jsx

import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licensePlate: '',
    serviceType: 'Onderhoud',
    preferredDate: '',
    message: ''
  });

  const [status, setStatus] = useState({ submitted: false, error: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Connect this fetch call to your form backend (e.g., Formspree endpoint)
    // const response = await fetch('https://formspree.io', { ... })
    
    console.log('Form data submitted:', formData);
    
    // Simulate successful submission
    setStatus({ submitted: true, error: false });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      licensePlate: '',
      serviceType: 'Onderhoud',
      preferredDate: '',
      message: ''
    });
  };

  return (
    <div style={styles.formContainer}>
      <h3 style={styles.heading}>Afspraak Maken</h3>
      
      {status.submitted && (
        <div style={styles.successMessage}>
          Bedankt! We hebben uw aanvraag ontvangen en nemen zo snel mogelijk contact op.
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Naam *</label>
            <input 
              type="text" name="name" required 
              value={formData.name} onChange={handleChange} style={styles.input} 
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Telefoonnummer *</label>
            <input 
              type="tel" name="phone" required 
              value={formData.phone} onChange={handleChange} style={styles.input} 
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mailadres *</label>
            <input 
              type="email" name="email" required 
              value={formData.email} onChange={handleChange} style={styles.input} 
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Kenteken (Optioneel)</label>
            <input 
              type="text" name="licensePlate" 
              value={formData.licensePlate} onChange={handleChange} style={styles.input} 
              placeholder="e.g. AB-123-C"
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Type Service</label>
            <select 
              name="serviceType" value={formData.serviceType} 
              onChange={handleChange} style={styles.input}
            >
              <option value="Onderhoud">Grote / Kleine Beurt</option>
              <option value="Reparatie">Reparatie</option>
              <option value="DSG">DSG Service</option>
              <option value="Airco">Airco Service</option>
              <option value="Diagnose">Storing / Diagnose</option>
              <option value="Anders">Anders (In overleg)</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Voorkeursdatum *</label>
            <input 
              type="date" name="preferredDate" required 
              value={formData.preferredDate} onChange={handleChange} style={styles.input} 
            />
          </div>
        </div>

        <div style={styles.inputGroupFull}>
          <label style={styles.label}>Aanvullende opmerkingen of omschrijving van de klacht</label>
          <textarea 
            name="message" rows="4" 
            value={formData.message} onChange={handleChange} style={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" style={styles.button}>Verzend Aanvraag</button>
      </form>
    </div>
  );
};

// Inline styling matching a sleek dark/neutral automotive theme
const styles = {
  formContainer: {
    maxWidth: '700px',
    margin: '20px auto',
    padding: '30px',
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    borderBottom: '2px solid #e50914', // Accent red line matching typical automotive brand accents
    paddingBottom: '10px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  row: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  inputGroup: {
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  inputGroupFull: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: '14px',
    color: '#ccc'
  },
  input: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #444',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    fontSize: '16px'
  },
  textarea: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #444',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    fontSize: '16px',
    resize: 'vertical'
  },
  button: {
    padding: '14px',
    backgroundColor: '#e50914',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.2s'
  },
  successMessage: {
    backgroundColor: '#2e7d32',
    color: '#fff',
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '20px'
  }
};

export default AppointmentForm;

// END AppointmentForm.jsx

// Contact.js 
// Import the component above directly into your main Contact page view file
import React from 'react';
import AppointmentForm from './components/AppointmentForm';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      {/* Your existing contact info layout (phone, address, email) here */}
      
      {/* Insert the form section */}
      <AppointmentForm />
    </div>
  );
};

export default ContactPage;

