import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import profilePic from '../assets/sanseevitha.jpeg';
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload,FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-stack Developer";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const msg = "Hello, I want more details";
  
  useEffect(() => {
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (index < fullText.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (index === fullText.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }
  }, [index, isDeleting]);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/sanseevithakanesan", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/sanseevitha-kanesan-40672126b", label: "LinkedIn" },
    { icon: <FaWhatsapp />, url: `https://wa.me/94773029020?text=${encodeURIComponent(msg)}`, label: "Twitter" }
  ];

  const handleDownload = (format, file) => {
    console.log(`Downloading CV in ${format} format`);
    const link = document.createElement('a');
    link.href = file;
    link.download = `sanseevithaKanesan_CV_${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert(`Your CV (${format} format) is downloading...`);
  };

  return (
    <section id="home" className="hero-section bg-grey" style={{ 
      paddingTop: '80px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: darkMode ? '#111827' : '#111827'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="hero-content">
              {/* Direct colors - no CSS variables */}
              <h1 className="display-4 fw-bold mb-3" style={{ 
                color: darkMode ? '#111827' : '#1f2937'
              }}>
                Hi, I'm <span style={{ color: '#4f46e5' }}>Sanseevitha</span>
              </h1>
              
              <h2 className="h3 mb-4" style={{ 
                color: darkMode ? '#111827' : '#1f2937',
                minHeight: '40px'
              }}>
                <span style={{ 
                  color: '#4f46e5',
                  fontWeight: '600'
                }}>{text}</span>
                <span style={{ 
                  color: '#4f46e5',
                  animation: 'blink 1s infinite'
                }}>|</span>
              </h2>
              
              <p className="lead mb-4" style={{ 
                color: darkMode ? '#d1d5db' : '#475c87ff',
                fontSize: '1.25rem',
                lineHeight: '1.6',
                opacity: 1,
                visibility: 'visible'
              }}>
               I build full-stack web applications that are fast, responsive, and visually engaging. From concept to deployment, 
               I turn ideas into seamless digital experiences
              </p>
              
              {/* CV Download Section */}
              <div className="mb-4">
                <h5 className="mb-3" style={{ 
                  color: darkMode ? '#ffffff' : '#1f2937'
                }}>Download My Resume</h5>
                {/* Quick Download Button */}
                <div className="d-flex gap-2 mb-4">
                  <a 
                    href="/SanseevithaCV.pdf" 
                    download="sanseevithaKanesan_FullStack_Developer_CV.pdf"
                    className="btn btn-primary d-flex align-items-center"
                    style={{ color: 'white' }}
                  >
                    <FaDownload className="me-2"/>Download (PDF)
                  </a>
                  <Link 
                    to="contact" 
                    smooth={true} 
                    duration={500}
                    className="btn btn-outline"
                    style={{ 
                      color: '#4f46e5', 
                      borderColor: '#4f46e5',
                      backgroundColor: 'transparent'
                    }}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

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

          <div className="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
            <div className="hero-image text-center">
              <div className="position-relative d-inline-block">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="shadow-lg"
                  style={{ 
                    width: '400px',       
                    height: '400px',      
                    borderRadius: '50%',  
                    objectFit: 'cover',  
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />

                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  opacity: 0.25
                }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="scroll-down"
            style={{ 
              color: '#4f46e5',
              textDecoration: 'none',
              display: 'inline-block',
              animation: 'bounce 2s infinite'
            }}
          >
            <FaArrowDown className="fs-4" />
          </Link>
        </div>
      </div>

     
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-20px);}
          60% {transform: translateY(-10px);}
        }
      `}</style>
    </section>
  );
};

export default Hero;