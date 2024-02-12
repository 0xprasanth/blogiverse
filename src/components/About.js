import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/github-mark.svg";
import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";

const About = () => {
  return (
    <main className="About">
      <h1>About</h1>
      <table className="grid">
        <tr>
          <td>Github</td>
          <td>
            <Link
              to={"https://github.com/ptech12/blogiverse"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="github" />
              <span className="txt">
              @ptech12
              </span>
            </Link>
          </td>
        </tr>
        <tr>
          <td>Instgram</td>
          <td>
            <Link
              to={"https://instagram.com/prasanth.inc"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="insta"/> 
              <span className="txt">
                prasanth.in
              </span>

            </Link>
          </td>
        </tr>
        <tr>
          <td>Linked In</td>
          <td>
            <Link
              to={"https://www.linkedin.com/in/prasanthdev/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="linkedin"/> 
              <span className="txt">

              prasantdev
              </span>
            </Link>
          </td>
        </tr>
      </table>
      {/* <ul className="about-me">
        <li className="txt">Github</li>
        <li className="github">
          <Link
            to={"http://github.com/ptech12/blogiverse"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="github"
              src={logo}
              style={{ width: "10%" }}
              alt="github-logo"
            />
          </Link>
        </li>
        <li className="txt">Instagram</li>
      </ul> */}
    </main>
  );
};

export default About;
