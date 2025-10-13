import React from 'react';
import './Section.css';
import myPhoto from './images/Professional Photo.jpg';

function About() {
    return (
        <section id="about" className="section">
            <h2 className="heading">About Me</h2>
            <img src={myPhoto} alt="Sophia Drewfs" className="profile-photo" />
            <p className="start">Computer Science Graduate & AI Red Teaming Expert</p>
            <p className="summary">Hi! I'm Sophia, a Computer Science graduate from the University of North Texas currently working as an AI Red Teaming Expert at Scale AI. My role involves analyzing AI model behavior, organizing datasets, and finding patterns that help improve AI safety, and I love every part of it.<br/><br/>
                                I discovered my passion for data analysis through my work in AI red teaming. Whether I'm organizing datasets, running systematic analyses, or identifying trends that lead to real insights, I find myself genuinely excited by the process. That detail-oriented mindset that makes me enjoy crocheting and diamond painting, turns out to be exactly what makes me good at data work.<br/><br/>
                                In this portfolio, you'll find two projects that showcase my analytical approach: a Two-Phase Red Teaming Case Study showcasing structured vulnerability testing and data analysis, and an Advanced Jailbreak Analysis examining AI model behavior patterns across multiple systems.<br/><br/>
                                Outside of work, I'm back into contemporary dance (something I loved when I was younger), and I'm always looking for my next creative project. I thrive in environments where I can make a real impact, grow my career, and solve complex problems.<br/><br/>
                                I'm actively seeking opportunities in data science and data analysis. If you think I'd be a good fit for your team, let's talk! Reach me at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sophiadrewfs@gmail.com" target="_blank" rel="noopener noreferrer">sophiadrewfs@gmail.com</a><br/><br/>
                                <b>Current focus</b>: Transitioning into data science roles | Open to Data Scientist and Data Analyst positions
            </p>
        </section>
    )
}

export default About;