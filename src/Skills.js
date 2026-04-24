import React from 'react';
import './Section.css';

function Skills() {
    return (
        <section id="skills" className="section">
            <h2 className="heading">Skills</h2>
            
            <div className="skills-container">
                <div className="skill-category">
                    <h3 className="skill-category-title">Programming & Development</h3>
                    <p className="skill-list">
                        Python • SQL • Git • Visual Studio Code • Google Apps Script
                    </p>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Data Analysis & Visualization</h3>
                    <p className="skill-list">
                        Google Sheets • Data Cleaning • Exploratory Data Analysis • Pattern Recognition • Statistical Analysis • Data Visualization
                    </p>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">AI Safety & Evaluation</h3>
                    <p className="skill-list">
                        AI Model Evaluation • Red Teaming • Adversarial Testing • Prompt Engineering • AI API Integration • Testing Frameworks • Technical Documentation
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;