import React from 'react'
// import { ReactComponent as GithubIcon } from '../../assets/github-alt.svg';
// import { ReactComponent as GithubIcon } from '../../assets/github-alt.svg';
import GithubIcon from '../../assets/github-alt.svg';
import LeetCodeIcon from '../../assets/leetcode.svg';
import LinkedIn from '../../assets/icons8-linkedin.svg';
const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/abhiguop" className="home__social-icon" target="_blank">
          <img src={GithubIcon} alt="GitHub Icon" style={{height:'20px',width:"20px"}}/>
      {/* Other content */}
        </a>
        <a href="https://www.linkedin.com/in/abhinav-gupta-718b8a256/" className="home__social-icon" target="_blank">
          <img src={LinkedIn} alt="LinkedIn icon" style={{height:'20px',width:"20px"}}/>
        </a>
        <a href="https://leetcode.com/u/abhi6395/" className="home__social-icon" target="_blank">
          <img src={LeetCodeIcon} alt="LeetCode Icon" style={{height:'20px',width:"20px"}}/>
        </a>
    </div>
  )
}

export default Social
//scoial