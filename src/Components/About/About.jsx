import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/hero.jpg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="title-box">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm Boddepalli Sai Teja</p>
                        <p>I'm a Passionate and skilled Front-End Developer in designing and implementing user-centric web applications. Proficient in HTML5, CSS3, and JavaScript, with a strong focus on modern frameworks such as React.js. Experienced in translating UI/UX designs into responsive and interactive web experiences, ensuring cross-browser compatibility and optimization for speed and performance.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>DSA</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1{'>'}</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>DEVELOPING SKILLS</p>
                </div>
            </div>
        </div>
    )
}

export default About
