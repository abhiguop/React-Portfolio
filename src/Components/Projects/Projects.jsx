import React, { useState } from 'react';
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(null);

    const toggleTab = (index) => {
        setToggleState(toggleState === index ? null : index);
    };

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title diffTitle">Projects</h2>
            <div className="projects__container container grid">

                {/* Project 1: Chatting-Out Website */}
                <div className="project__content">
                    <div>
                        <i className='bx bx-chat services__icon'></i>
                        <h3 className="project__title">Chatting-Out <br /> Website</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times services__modal-close"></i>
                            <h3 className="project__modal-title">Chatting-Out</h3>
                            <p className="project__modal-description">
                                <a href="https://chatting-out.onrender.com/" className="button button--flex project__link" target="_blank" rel="noopener noreferrer">Project Link</a>
                                <a href="https://github.com/abhiguop/Chatting-out" className="button button--flex project__link" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                            <ul className="project__modal-services grid">
                            <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>User-friendly platform:</b> Intuitive design simplifies online chatting, making it accessible and enjoyable for all users.
                                        
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Seamless Real-Time Communication</b> WebSocket integration ensures instant message delivery and real-time updates.
                                        
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Enhanced Security:</b> JWT authentication safeguards user data and sessions against unauthorized access.
                                        
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Optimized Performance:</b> Reliable uptime on Render provides smooth, uninterrupted usage.
                                        
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Tailored Chat Experience:</b> Customized 1-on-1 and group chat features with efficient room management enhance engagement.
                                        
                                    </p>
                                </li>
                                {/* Add more services here as needed */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 2: QR Generator Website */}
                <div className="project__content">
                    <div>
                        <i className='bx bx-qr services__icon'></i>
                        <h3 className="project__title">QR Generator<br /> Website</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times services__modal-close"></i>
                            <h3 className="project__modal-title">QR Generator</h3>
                            <p className="project__modal-description">
                                <a href="https://abhiguop.github.io/QR-CODE-GENERATOR/" className="button button--flex project__link" target="_blank" rel="noopener noreferrer">Project Link</a>
                                <a href="https://github.com/abhiguop/QR-GENERATOR" className="button button--flex project__link" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </p>
                            <ul className="project__modal-services grid">
                            <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Responsive QR Code Generator:</b> Built with HTML, CSS, and JavaScript, boosting user accessibility by 90% across all devices.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Fast QR Code Generation:</b> Integrated a third-party API to deliver real-time QR codes with a 40% faster generation time.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        <b>Enhanced Usability:</b> Created a seamless interface for easy QR code generation and downloads, improving usability by 50%.
                                    </p>
                                </li>
                                {/* Add more services here as needed */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project 3: Gymkhana College Website */}
                <div className="project__content">
                    <div>
                        <i className='bx bx-brain services__icon'></i>
                        <h3 className="project__title">Gymkhana College Website</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(null)} className="uil uil-times services__modal-close"></i>
                            <h3 className="project__modal-title">Gymkhana College Website</h3>
                            <p className="project__modal-description">
                                <a href="#" className="button button--flex project__link" target="_blank" rel="noopener noreferrer">Project Link</a>
                            </p>
                            <ul className="project__modal-services grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    <b>Full-Stack Contribution:</b> Worked with a team on both frontend and backend using TypeScript and PostgreSQL to build a seamless college club portal.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    <b>Club and Event Details:</b> Easy access to information on clubs, events, and vice presidents.
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    <b>Scalable Design:</b> Supports 1000+ students with reliable, efficient data access.
                                    </p>
                                </li>
                                {/* Add more services here as needed */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
//projects
