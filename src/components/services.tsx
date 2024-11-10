import "../style/Services.css";
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { SiNextui } from "react-icons/si";
import { FaPhotoVideo } from "react-icons/fa";
import { FaFantasyFlightGames } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";


function Services() {
  return (
    <main className="main">
      <div className="ser-container">
        {/* top */}
        <div className="top-div-ser">
          <h1 className="title-ser">My Services</h1>
          <p className="des-ser">
          Offering a complete suite of services from UI/UX design to frontend development, I specialize in crafting visually appealing and highly functional web experiences. With a focus on user-centered design, I ensure that each project not only looks great but also provides a seamless and engaging user experience. Let’s bring your vision to life with responsive, modern, and intuitive interfaces.
          </p>
        </div>

        {/* bottom */}
        <div className="boxes-con">
          <div className="box">
            <FaLaptopCode className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>

          <div className="box">
            <GiSoundOn  className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>

          <div className="box">
            <SiNextui className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>

          <div className="box">
            <FaPhotoVideo className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>

          <div className="box">
            <FaFantasyFlightGames className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>

          <div className="box">
            <FcAdvertising className="ser-icon" />
            <h3>Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Services;
