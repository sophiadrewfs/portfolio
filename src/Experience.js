import React from 'react';
import './Section.css';

function Experience() {
    return (
        <section id="experience" className="section">
            <h2 className="heading">Experience/Education</h2>
            <p className="experience-start"><b>Experience</b></p>
            
            <p className="experience"><b>AI Red Teaming Expert</b><br />Scale AI<br /><i>September 2025 - Current</i></p>
            <p className="experience-description">I test AI systems for safety vulnerabilities and analyze model behavior to improve AI safety systems. My work focuses on translating complex security findings into actionable recommendations.</p>
            <ol className="experience-list">
                <li>Analyze large-scale datasets of AI responses to identify behavioral patterns and vulnerabilities</li>
                <li>Create documentation and testing frameworks used across projects</li>
                <li>Contribute to project reviews and workflow development</li>
            </ol>
            
            <p className="experience"><b>AI Red Teamer</b><br />Scale AI<br /><i>January 2024 - September 2025</i></p>
            <p className="experience-description">I developed and tested prompts to identify safety vulnerabilities across AI models, using systematic approaches to evaluate how different attack methods could bypass safety mechanisms.</p>
            <ol className="experience-list">
                <li>Designed operational documentation and tracking systems using Google Sheets to organize testing data and improve efficiency</li>
                <li>Performed data cleaning and categorization of model responses to identify behavioral patterns and security gaps</li>
            </ol>
            
            <p className="experience"><b>AI Coding Quality</b><br />Scale AI<br /><i>November 2023 - January 2024</i></p>
            <p className="experience-description">I reviewed and assessed AI-generated code for quality, functionality, and adherence to coding standards, providing detailed feedback to improve code outputs.</p>
            <ol className="experience-list">
                <li>Conducted quality assurance checks on AI-generated code to identify bugs, errors, and areas for improvement</li>
            </ol>
            
            <p className="experience"><b>Computer Science Peer Mentor</b><br />University of North Texas<br /><i>September 2020 - December 2022</i></p>
            <p className="experience-description">I mentored students in introductory programming courses, providing support with debugging, problem-solving, and core computer science concepts.</p>
            <ol className="experience-list">
                <li>Mentored students in programming fundamentals lab facilitation and office hours</li>
            </ol>
            
            <p className="experience-start"><b>Education</b></p>
            <p className="experience"><b>University of North Texas</b><br />Bachelor's Degree in Computer Science<br /><i>August 2018 - December 2022</i></p>
        </section>
    );
}

export default Experience;