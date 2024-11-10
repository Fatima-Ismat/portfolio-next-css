
import Image from "next/image";
import "../style/hero.css";
import "../style/hero.css";

function Hero() {
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
            alt="Profile"
          />
        </div>
        {/* right */}
        <div className="hero-right-div">
          <h1 className="title-hero">I'm Ismat Fatima<br/> Front-end Developer </h1>
          <p className="des-hero">
          A frontend developer dedicated to designing and building seamless, user-friendly web applications with a creative touch.
          </p>
          <button className="hero-btn">Hire Me</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
