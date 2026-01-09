import React,{useState} from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { FaGithub, FaLinkedin,FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  const msg = 'I want more details';
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/sanseevithakanesan", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/sanseevitha-kanesan-40672126b", label: "LinkedIn" },
    { icon: <FaWhatsapp />, url: `https://wa.me/94773029020?text=${encodeURIComponent(msg)}`, label: "whatspp" }
  ];
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Portfolio</h5>
            <p className="text-light">
              A showcase of my work, skills, and experience as a full-stack developer.
              Let's build something amazing together!
            </p>
          </div>
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-light text-decoration-none">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="mb-3">Connect With Me</h5>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon hover-lift"
                  aria-label={link.label}
                  style={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.icon}
                </a>
              ))}
              </div>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-end">
            <button
              onClick={scrollToTop}
              className="btn btn-outline-light btn-sm"
              aria-label="Back to top"
            >
              <FaArrowUp className="me-1" /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;