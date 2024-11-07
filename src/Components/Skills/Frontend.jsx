import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
            <div className="skils__group">
                <div className="skills__data">
                <i className='bx bxl-html5 skillicon'></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bxl-css3 skillicon'></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bxl-javascript skillicon'></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                
            </div>
            <div className="skils__group">
                <div className="skills__data">
                <i className='bx bxl-bootstrap skillicon'></i>
                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bxl-git skillicon' ></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i className='bx bxl-react skillicon' ></i>
                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Frontend
//frontend