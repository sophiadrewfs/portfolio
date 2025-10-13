import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [expandedProjects, setExpandedProjects] = useState(['two-phase']);
    
    const projects = {
        'two-phase-methodology': {
            title: 'Two-Phase Red Team Case Study - Methodology',
            pdfUrl: '/methodology-case-study.pdf'
        },
        'two-phase-case-study': {
            title: 'Two-Phase Red Teaming Case Study',
            pdfUrl: '/case-study.pdf'
        },
        'two-phase-data-analysis': {
            title: 'Two-Phase Red Team Case Study - Data Analysis',
            pdfUrl: '/data-analysis.pdf'
        },
        'two-phase-pre-prompting-results': {
            title: 'Two-Phase Red Team Case Study - Pre-Prompting Results',
            pdfUrl: '/pre-prompting-results.pdf'
        },
        'two-phase-focused-prompting-results': {
            title: 'Two-Phase Red Team Case Study - Focused Prompting Results',
            pdfUrl: '/focused-prompting-results.pdf'
        },
        'jailbreak': {
            title: 'Advanced Jailbreak Analysis',
            pdfUrl: '/jailbreak-analysis.pdf'
        }
    };

    const toggleProject = (projectKey) => {
        if (expandedProjects.includes(projectKey)) {
            setExpandedProjects(expandedProjects.filter(p => p !== projectKey));
        } else {
            setExpandedProjects([...expandedProjects, projectKey]);
        }
    };

    if (!selectedProject) {
        return (
            <section id="projects" className="projects-section">
                <h2>Personal Projects</h2>
                <div className="projects-container">
                    <aside className="projects-sidebar">
                        <div className="project-category">
                            <h3>AI Prompt Engineering</h3>
                            <ul className="project-list">
                                <li className="project-main">
                                    <div 
                                        className="project-header"
                                        onClick={() => toggleProject('two-phase')}
                                    >
                                        <span className={`arrow ${expandedProjects.includes('two-phase') ? 'expanded' : ''}`}>
                                            ▶
                                        </span>
                                        Two-Phase Red Teaming Case Study
                                    </div>
                                    
                                    {expandedProjects.includes('two-phase') && (
                                        <ul className="project-subsections">
                                            <li 
                                                className={selectedProject === 'two-phase-methodology' ? 'active' : ''}
                                                onClick={() => setSelectedProject('two-phase-methodology')}
                                            >
                                                Methodology Overview
                                            </li>
                                            <li 
                                                className={selectedProject === 'two-phase-case-study' ? 'active' : ''}
                                                onClick={() => setSelectedProject('two-phase-case-study')}
                                            >
                                                Case Study
                                            </li>
                                            <li 
                                                className={selectedProject === 'two-phase-data-analysis' ? 'active' : ''}
                                                onClick={() => setSelectedProject('two-phase-data-analysis')}
                                            >
                                                Data Analysis
                                            </li>
                                            <li 
                                                className={selectedProject === 'two-phase-pre-prompting-results' ? 'active' : ''}
                                                onClick={() => setSelectedProject('two-phase-pre-prompting-results')}
                                            >
                                                Pre-Prompting Results
                                            </li>
                                            <li 
                                                className={selectedProject === 'two-phase-focused-prompting-results' ? 'active' : ''}
                                                onClick={() => setSelectedProject('two-phase-focused-prompting-results')}
                                            >
                                                Focused Prompting Results
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                
                                <li 
                                    className={selectedProject === 'jailbreak' ? 'active' : ''}
                                    onClick={() => setSelectedProject('jailbreak')}
                                >
                                    Advanced Jailbreak Analysis
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <div className="projects-content">
                        <div className="projects-cards-container">
                            <p className="projects-intro-text">
                                Select a project below to learn more about my work!
                            </p>
                            
                            <div className="project-cards">
                                <div className="project-card" onClick={() => setSelectedProject('two-phase-methodology')}>
                                    <h3 className="project-card-title">Two-Phase Red Teaming Case Study</h3>
                                    <p className="project-card-description">
                                        A structured methodology that reduces initial vulnerability exploration time 
                                        from days to hours through data collection and targeted analysis.
                                    </p>
                                    <span className="project-card-link">View Project →</span>
                                </div>

                                <div className="project-card" onClick={() => setSelectedProject('jailbreak')}>
                                    <h3 className="project-card-title">Advanced Jailbreak Analysis</h3>
                                    <p className="project-card-description">
                                        Cross-model analysis examining how layered attack methods successfully 
                                        bypassed safety mechanisms across 10 AI models.
                                    </p>
                                    <span className="project-card-link">View Project →</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h2>Personal Projects</h2>
                <button className="back-button" onClick={() => setSelectedProject(null)}>
                    ← Back to Projects
                </button>
            </div>
            <div className="projects-container">
                <aside className="projects-sidebar">
                    <div className="project-category">
                        <h3>AI Prompt Engineering</h3>
                        <ul className="project-list">
                            <li className="project-main">
                                <div 
                                    className="project-header"
                                    onClick={() => toggleProject('two-phase')}
                                >
                                    <span className={`arrow ${expandedProjects.includes('two-phase') ? 'expanded' : ''}`}>
                                        ▶
                                    </span>
                                    Two-Phase Red Teaming Case Study
                                </div>
                                
                                {expandedProjects.includes('two-phase') && (
                                    <ul className="project-subsections">
                                        <li 
                                            className={selectedProject === 'two-phase-methodology' ? 'active' : ''}
                                            onClick={() => setSelectedProject('two-phase-methodology')}
                                        >
                                            Methodology Overview
                                        </li>
                                        <li 
                                            className={selectedProject === 'two-phase-case-study' ? 'active' : ''}
                                            onClick={() => setSelectedProject('two-phase-case-study')}
                                        >
                                            Case Study
                                        </li>
                                        <li 
                                            className={selectedProject === 'two-phase-data-analysis' ? 'active' : ''}
                                            onClick={() => setSelectedProject('two-phase-data-analysis')}
                                        >
                                            Data Analysis
                                        </li>
                                        <li 
                                            className={selectedProject === 'two-phase-pre-prompting-results' ? 'active' : ''}
                                            onClick={() => setSelectedProject('two-phase-pre-prompting-results')}
                                        >
                                            Pre-Prompting Results
                                        </li>
                                        <li 
                                            className={selectedProject === 'two-phase-focused-prompting-results' ? 'active' : ''}
                                            onClick={() => setSelectedProject('two-phase-focused-prompting-results')}
                                        >
                                            Focused Prompting Results
                                        </li>
                                    </ul>
                                )}
                            </li>
                            
                            <li 
                                className={selectedProject === 'jailbreak' ? 'active' : ''}
                                onClick={() => setSelectedProject('jailbreak')}
                            >
                                Advanced Jailbreak Analysis
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="projects-content">
                    <iframe
                        src={`${projects[selectedProject].pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                        title={projects[selectedProject].title}
                        className="pdf-viewer-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;