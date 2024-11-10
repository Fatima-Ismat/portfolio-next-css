import Image from "next/image";
import "../style/about.css";
import "../style/hero.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import Link from "next/link";

function About() {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        {/* left */}

        <div>
          <Image
            src={"/images/image1.png"}
            width={200}
            height={350}
            className="header-image"
            alt="Profile"/>
            
            <div className="social icon">
            <Link href="https://github.com/Fatima-Ismat" target="_blank"> <FaGithub className="s-icon1"/></Link>
              <Link href="https://www.linkedin.com/in/ismat-fatima-a67b9b81/" target= "_blank"><FaLinkedinIn className="s-icon2"/></Link>
              <Link href="https://vercel.com/new?teamSlug=fatima-ismats-projects" target="_blank"><IoTriangle className="s-icon3"/></Link>
            </div>
        </div>
        {/* right */}
        <div className="hero-right-div">
          <h1 className="title-hero"> About us</h1>
          <p className="des-hero">
          I am a dedicated frontend developer passionate about creating intuitive and visually engaging user interfaces. With expertise in modern web technologies, I strive to deliver seamless and responsive web experiences that meet both design and functionality standards. My focus is on building efficient, user-centric applications that bring ideas to life on the web.
          </p>
          
        </div>
      </div>
    </div>
  );
}
export default About;
