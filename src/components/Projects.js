import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'full-stack', label: 'Full Stack' },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title myproject">My Projects</h2>
        
        <div className="mb-5">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            <span className="d-flex align-items-center text-secondary me-3">
              <FaFilter className="me-2" /> Filter by:
            </span>
            {filters.map(category => (
              <button
                key={category.id}
                className={`btn ${filter === category.id ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="row g-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="col-lg-4 col-md-6"
            >
              <div 
                className={`fade-in card project-card h-100 ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="position-relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top project-img"
                  />
                  {project.featured && (
                    <span className="position-absolute top-0 end-0 m-3 badge bg-primary">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="card-body d-flex flex-column">
                  <div className="project-content">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-secondary">{project.description}</p>
                    
                    <div className="project-tech mb-3">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <FaGithub className="me-2" /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <FaExternalLinkAlt className="me-2" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            <FaGithub className="me-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;