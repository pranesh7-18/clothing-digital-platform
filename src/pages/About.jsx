import './About.css'
import i1 from '../assets/about/a6.jpg'
import v1 from '../assets/about/1.mp4'
import Feature from './page-components/Feature'
import NewsLetter from './page-components/NewsLetter'
const About = () => {
  return (
    <>
    <section className="about-header page-header">
            <h2>#KnowUs</h2>
            <p>Read all case studies about our products! </p>
    </section>

    <section className="about-head section-p1">
        <img src={i1} alt="" />
        <div>
            <h2>Who We Are?</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <abbr title="">Create stunning images with as much or as little control as.you.like
                thanks to a choice of Basic and Creative.modes.
            </abbr>
            <br /><br />
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" wid="100%">Create stunning images with as much or as
                little control as you like thanks to a choice of Basic and Creative modes.
            </marquee>
        </div>
    </section>

    <section id="" className="about-app section-p1">
            <h1>Download Our <a href="#">App</a></h1>
            <div className="video">
                <video autoPlay muted loop src={v1}></video>
            </div>
    </section>
    <Feature />
    <NewsLetter />
    </>
  )
}

export default About