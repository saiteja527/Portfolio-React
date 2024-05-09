import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.png';
import arrow_icon from '../../assets/arrow_icon.svg';
import project_1 from '../../assets/project_1.png';
import project_2 from '../../assets/project_2.png';
import project_3 from '../../assets/project_3.png';
import project_4 from '../../assets/project_4.png';
import project_5 from '../../assets/project_5.png';
import project_6 from '../../assets/project_6.png';

const MyWork = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Profiles</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <a href="https://www.codechef.com/users/saiteja9963" data-text="CodeChef (Highest Rating 1520(2⭐) | 500+ solved problems)"><img src={project_1} alt="" /></a>
        <a href="https://leetcode.com/saiteja9963/" data-text="LeetCode (350+ solved problems)"><img src={project_2} alt="" /></a>
        <a href="https://www.geeksforgeeks.org/user/saiteja9963/" data-text="GeeksForGeeks  (100+ solved problems)"><img src={project_3} alt="" /></a>
        {showMore && (
          <>
            <a href="https://www.linkedin.com/in/boddepalli-sai-teja-0a24b3255/" data-text="LinkeIn Profile"><img src={project_4} alt="" /></a>
            <a href="https://github.com/saiteja527" data-text="GitHub My Projects"><img src={project_5} alt="" /></a>
            <a href="https://www.hackerrank.com/profile/boddepalli_rama1" data-text="HackerRank Sql-5⭐ Python,Sql(Basic and Intermediate)Certified"><img src={project_6} alt="" /></a>
          </>
        )}
      </div>
      <div className="mywork-showmore" onClick={toggleShowMore}>
        <p>{showMore ? 'Show Less' : 'Show More'}</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
