import React from 'react';
import './Section.css';

function Skills() {
    return (
        <section id="skills" className="section">
            <h2 className="heading">Skills</h2>
            
            <div className="skills-container">
                <div className="skill-category">
                    <h3 className="skill-category-title">Programming & Data Analysis</h3>
                    <p className="skill-list">
                        Python • SQL • Java • JavaScript • Data Analysis • Data Visualization • Pattern Recognition • Data Cleaning • Statistical Analysis • Exploratory Data Analysis
                    </p>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Tools & Technologies</h3>
                    <p className="skill-list">
                        Google Sheets / Microsoft Excel • Google Apps Script • Git • Visual Studio Code • IntelliJ
                    </p>
                </div>

                <div className="skill-category">
                    <h3 className="skill-category-title">Specialized Skills</h3>
                    <p className="skill-list">
                        AI Model Evaluation • Red Teaming • Prompt Engineering • Testing Methodologies • Technical Documentation • Quality Assurance
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Skills;