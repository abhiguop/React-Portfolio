import React, { useState } from 'react'
import "./qualification.css";
const Qualification = () => {
    const [toggleState,setToggleState]=useState(1);
    const toggleTab=(ind)=>{
        setToggleState(ind)
    }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personel Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div onClick={()=>toggleTab(1)} className={toggleState===1?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
                <div onClick={()=>toggleTab(2)} className={toggleState===2?"qualification__button qualification__active button--flex":"qualification__button button--flex"}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState===1?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech in Electronics and Communication Enginering</h3>
                            <span className="qualification__subtitle">Indian Institute of Information Technology Bhagalpur (IIITBH)</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Class 12th</h3>
                            <span className="qualification__subtitle">Kendriya Vidyalaya,Etah</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021
                            </div>
                        
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Class 10th</h3>
                            <span className="qualification__subtitle">Kendriya Vidyalaya,Etah</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
                {/* <div className={toggleState===2?"qualification__content qualification__content-active":"qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">SDE Intern</h3>
                            <span className="qualification__subtitle">Datence Technologies</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                10-2024 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> 
                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Class 12th</h3>
                            <span className="qualification__subtitle">BGS International Public School, Dwarka</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Class 10th</h3>
                            <span className="qualification__subtitle">BGS International Public School, Dwarka</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}
                </div>
            </div>
    </section>
  )
}

export default Qualification
//qualification