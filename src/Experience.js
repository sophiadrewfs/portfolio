import React from 'react';
import './Section.css';

function Experience() {
    return (
        <section id="experience" className="section">
            <h2 className="heading">Experience/Education</h2>
            <p className="experience-start"><b>Experience</b></p>

            <p className="company-name">Handshake</p>

            <p className="experience"><b>AI Red Teamer</b><br /><i>February 2026 - Present</i></p>
            <p className="experience-description">I contribute to adversarial evaluation across multiple simultaneous projects in a fast-paced environment, identifying trends and insights in model safety data to inform broader safety strategy.</p>
            <ol className="experience-list">
                <li>Serve as an internal resource for Handshake's safety division, supporting and guiding the team</li>
                <li>Conduct prompt creation and evaluation across high-priority harm categories</li>
            </ol>

            <p className="experience"><b>AI Red Teaming Fellow</b><br /><i>November 2025 - February 2026</i></p>
            <p className="experience-description">I joined Handshake's red teaming division as a Fellow, contributing across multiple adversarial projects including safety testing for frontier AI models.</p>
            <ol className="experience-list">
                <li>Conducted prompt creation, analysis, and labeling across a range of high-priority harm categories</li>
            </ol>

            <p className="company-name">Scale AI</p>

            <p className="experience"><b>AI Red Teaming Expert</b><br /><i>March 2025 - November 2025</i></p>
            <p className="experience-description">I authored insight reports translating large-scale behavioral analysis of AI-generated responses into actionable safety recommendations for internal teams and external clients.</p>
            <ol className="experience-list">
                <li>Identified behavioral patterns across AI model iterations to inform safety improvements across frontier model evaluations</li>
                <li>Developed and led onboarding and training programs for 20+ red teamers to standardize data collection and analysis practices</li>
            </ol>

            <p className="experience"><b>AI Red Teamer</b><br /><i>November 2023 - March 2025</i></p>
            <p className="experience-description">As a founding member of Scale AI's red team, I contributed to establishing initial red teaming practices, workflows, and data standards that shaped the team's operations.</p>
            <ol className="experience-list">
                <li>Designed and executed adversarial prompt testing across multiple attack methodologies to identify safety vulnerabilities in frontier AI models</li>
                <li>Built and maintained data organization frameworks using advanced formulas and automation, improving project efficiency across large-scale red teaming operations</li>
                <li>Performed extensive data cleaning, categorization, and quality assessment of unstructured text data to enable systematic analysis</li>
            </ol>

            <p className="company-name">University of North Texas</p>

            <p className="experience"><b>Computer Science Peer Mentor</b><br /><i>September 2020 - December 2022</i></p>
            <p className="experience-description">I mentored students in introductory programming courses, providing support with debugging, problem-solving, and core computer science concepts.</p>

            <p className="experience-start"><b>Education</b></p>

            <p className="company-name">University of North Texas</p>
            <p className="experience"><b>Bachelor of Science in Computer Science</b><br /><i>August 2018 - December 2022</i><br />GPA: 3.27 | Dean's List: <i>Fall 2022</i></p>
        </section>
    );
}

export default Experience;