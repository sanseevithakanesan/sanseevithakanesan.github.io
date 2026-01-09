import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheck, FaExclamationTriangle, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

emailjs.init('aUm5mUBq1ZEcvbvXmSeSJ');

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    console.log('sadform',formData)
    try {
      await emailjs.send(
        'service_oc47w0r',
        'template_ukoqycq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'sanseevitha'
        },
        'aUm5mUBq1ZEXmSeSJ'
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-primary"/>,
      title: 'Email',
      value: 'sanseevithakanesan@gmail.com',
      link: 'mailto:hello@yourdomain.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '0773029020',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'No 46 Nanthavil Lane,kokuvil',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact-section bg-grey text-white">
      <div className="container">
        <h2 className="section-title section-contact">Get In Touch</h2>
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="mb-4">
              <h3 className="mb-4 ">Let's work together</h3>
              <p className="text-secondary">
                I'm currently open to new opportunities, interesting projects, 
                or just a friendly chat about tech. Feel free to reach out!
              </p>
            </div>
           
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <div key={index} className="d-flex align-items-center mb-4">
                  <div className=" me-3">
                    <span className="custom-icon" >
                      {info.icon}
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-1">{info.title}</h6>
                    <a 
                      href={info.link} 
                      className="text-decoration-none"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="card contact-form-card">
              <div className="card-body">
                {status.submitted && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <FaCheck className="me-2" />
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {status.error && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <FaExclamationTriangle className="me-2" />
                    {status.error}
                  </div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status.submitting}
                      />
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status.submitting}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="me-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;