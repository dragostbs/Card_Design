import "./index.scss";
import image from "./main-image.png";
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="card">
        <section className="head-seaction">
          <img src={image} className="card-image" />
          <h1>Sierra Lou</h1>
          <h2>Frontend Developer</h2>
          <h3>sierralou.website</h3>
          <div className="icons">
            <a href="https://mail.google.com" className="a1">
              <FaEnvelope className="envelope" size="21px" />
              <h4>Email</h4>
            </a>
            <a href="https://www.linkedin.com/" className="a2">
              <FaLinkedin className="linkedin" size="21px" />
              <h5>Linkedin</h5>
            </a>
          </div>
        </section>
        <section className="middle-section">
          <h6>About</h6>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h6>Interests</h6>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </section>
        <section className="footer-section">
          <a href="https://twitter.com">
            <FaTwitterSquare size="28px" />
          </a>
          <a href="https://www.facebook.com">
            <FaFacebookSquare size="28px" />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagramSquare size="28px" />
          </a>
          <a href="https://github.com/">
            <FaGithubSquare size="28px" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
