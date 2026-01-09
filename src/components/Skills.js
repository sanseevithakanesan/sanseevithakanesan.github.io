import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(skillsData.map(skill => skill.id));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  const filteredSkills = skillsData.filter(skill => {
    if (filter === 'all') return true;
    return skill.category === filter;
  });

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'frameWork', label: 'FrameWork' }
  ];

  return (
    <section id="skills" className="skills-section bg-light  py-5">
      <div className="container text-dark">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="mb-5 text-center">
          <div className="btn-group category-btn" role="group">
            {categories.map(category => (
              <button
            
                key={category.id}
                type="button"
                className={`btn ${filter === category.id ? 'btn-primary' : 'btn-outline-primary category-btn'}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`fade-in card skill-card ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="skill-icon mb-3">
                <i className={`${skill.icon} fa-2x`}></i>
              </div>
              <h5 className="mb-3">{skill.name}</h5>
              
              <div className="progress mb-2">
                <div
                  className={`progress-bar ${animatedSkills.includes(skill.id) ? 'animated' : ''}`}
                  style={{
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 150}ms`
                  }}
                ></div>
              </div>
              
              <div className="d-flex justify-content-between">
                <span className="text-secondary">Level</span>
                <span className="fw-bold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Frontend Expertise</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Responsive Web Design
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Single Page Applications
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Progressive Web Apps
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title mb-3">Backend Expertise</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    REST API Development
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Database Design & Optimization
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Authentication & Authorization
                  </li>
                  <li className="mb-2">
                    <span className="text-primary me-2">✓</span>
                    Server Deployment & Scaling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;