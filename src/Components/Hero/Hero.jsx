import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pics.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ConnectBtn from '../Navbar/connect-btn/connectbtn'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import ResumeBtn from './resume-btn/resumebtn'

const Hero = () => {
  const [typeeffect] = useTypewriter({
    words: ['Front-End Developer.', 'Competitive Programmer.', 'UI/UX Designer.'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1>I'm Boddepalli Sai Teja</h1>
      <p> I am a {' '}
        <span>{typeeffect}</span>
        <span style={{ color: '#2189a3' }}><Cursor /></span>
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><ConnectBtn /></AnchorLink></div>
        <div className="hero-resume"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-d1618.appspot.com/o/SAI%20TEJA's%20RESUME-hackerresume.pdf?alt=media&token=fdc84ce0-ce01-4eee-ba45-c3221d49154b"><ResumeBtn /></a></div>
      </div>
    </div>
  )
}

export default Hero
