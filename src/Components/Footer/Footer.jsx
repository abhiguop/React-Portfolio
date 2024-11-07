import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Abhinav Gupta</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

            </ul>
            <div className="footer__social">
                <a href="https://api.whatsapp.com/send?phone=+917895785772&text=Hello, More Information" className="footer__social-icon" target="_blank">
                <i className='bx bxl-whatsapp'></i>
                </a>
                <a href="https://www.linkedin.com/in/abhinav-gupta-718b8a256/" className="footer__social-icon" target="_blank">
                <i className='bx bxl-linkedin'></i>
                </a>
            </div>
            <p className="code__container"><a href="https://github.com/abhiguop/React-Portfolio" className="button button--flex source__code" target="_blank">Source Code</a></p>
            <span className="footer__copy">
                &#169; Abhinav Gupta. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
//footer