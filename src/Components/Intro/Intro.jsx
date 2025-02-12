import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import Vector1 from "/public/Vector1.png";
import Vector2 from "/public/Vector2.png";
import boy from "/public/me.png";
import thumbup from "/public/thumbup.png";
import Crown from "/public/crown.png";
import glassesimoji from "/public/glassesimoji.png";
import "./Intro.css";

function Intro() {
  return (
    <div className="Intro" id="Intro">
      <div className="intro">
        <div className="i-left">
          <span>Hey! I Am</span>
          <span>Kohantika Nath</span>
          <span>
            I'm a software development enthusiast currently studying web design
            and development producing the Quality work.
          </span>
          <button className="button">Hire Me</button>
          <div className="icons">
            <a href="https://www.linkedin.com/in/kohantika-nath-25b023283/">
              <LinkedIn className="i" />
            </a>
            <a href="https://github.com/kohantikanath">
              <GitHub className="i" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img className="y-bg" src={Vector2} alt="" />
          <img className="boy" src={boy} alt="" />
          <img className="b-bg" src={Vector1} alt="" />
          <div className="img-cont">
            <img src={thumbup} alt="" />
            <p>Best Design Award</p>
          </div>
          <img src={glassesimoji} alt="" className="g-emoji" />
          <div className="img-cont">
            <img src={Crown} alt="" />
            <p>Web developer</p>
          </div>
          <div className="blur1"></div>
          <div className="blur2"></div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
