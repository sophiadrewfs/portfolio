import React from 'react';
import './Section.css';
import myPhoto from './images/Profile Pic.jpg';

function About() {
    return (
        <section id="about" className="section">
            <h2 className="heading">About Me</h2>
            <img src={myPhoto} alt="Sophia Drewfs" className="profile-photo" />
            <p className="start">AI Red Teamer & Safety Analyst</p>
            <p className="summary">Hi! I'm Sophia, a Computer Science graduate from the University of North Texas currently working as a Red Teamer at Handshake. My role involves testing AI models for vulnerabilities, analyzing model behavior, and finding patterns that help improve AI safety, and I love every part of it.<br/><br/>
                                I discovered my passion for data analysis through my work in AI red teaming. Whether I'm organizing datasets, running systematic analyses, or identifying trends that lead to real insights, I find myself genuinely excited by the process. That detail-oriented mindset that makes me enjoy crocheting and diamond painting, turns out to be exactly what makes me good at data work.<br/><br/>
                                In this portfolio, you'll find two projects that showcase my analytical approach: a Two-Phase Red Teaming Case Study showcasing structured vulnerability testing and data analysis, and an Advanced Jailbreak Analysis examining AI model behavior patterns across multiple systems.<br/><br/>
                                Outside of work, I'm back into contemporary dance (something I loved when I was younger), and I'm always looking for my next creative project. I thrive in environments where I can make a real impact, grow my career, and solve complex problems.<br/><br/>
                                Feel free to reach out at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sophiadrewfs@gmail.com" target="_blank" rel="noopener noreferrer">sophiadrewfs@gmail.com</a>
            </p>
        </section>
    )
}

export default About;