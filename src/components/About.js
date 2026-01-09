import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const statsRef = useRef(null);

  useEffect(() => {
    if (inView && statsRef.current) {
      const counters = statsRef.current.querySelectorAll('.counter');
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 100;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  }, [inView]);

  const specialties = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Building scalable server-side applications and RESTful APIs"
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries"
    },
    {
      icon: <FaTools />,
      title: "DevOps & Tools",
      description: "Implementing CI/CD pipelines and containerization"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title about">About Me</h2>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div ref={ref} className={`fade-in ${inView ? 'visible' : ''}`}>
              <h3 className="mb-4">Crafting Digital Experiences</h3>
              <p className="mb-3">
                I'm a passionate full-stack developer with 3+ years of experience 
                building web applications. My journey in web development started 
                with a curiosity about how websites work, which evolved into a 
                career creating digital solutions.
              </p>
              <p className="mb-3">
                I specialize in the MERN stack (MongoDB, Express.js, React, Node.js,Next.js) 
                but I'm always eager to learn new technologies and frameworks. 
                I believe in writing clean, maintainable code and following 
                best practices.
              </p>
              
              
              <div className="row" ref={statsRef}>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <h3 className="counter text-primary fw-bold" data-target="10">0</h3>
                    <p className="mb-0">Projects</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <h3 className="counter text-primary fw-bold" data-target="15">0</h3>
                    <p className="mb-0">Clients</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <h3 className="counter text-primary fw-bold" data-target="3">0</h3>
                    <p className="mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                  <div className="text-center">
                    <h3 className="counter text-primary fw-bold" data-target="20">0</h3>
                    <p className="mb-0">Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="row g-3">
              {specialties.map((specialty, index) => (
                <div 
                  key={index} 
                  className="col-md-6"
                >
                  <div className={`card h-100 hover-lift slide-in-right ${inView ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <span className="display-6 text-primary">
                          {specialty.icon}
                        </span>
                      </div>
                      <h5 className="card-title mb-2">{specialty.title}</h5>
                      <p className="card-text text-secondary">{specialty.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;