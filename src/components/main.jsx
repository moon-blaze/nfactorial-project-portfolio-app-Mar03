import "./index.css";
import datas from "./index.json";
import photo from "../images/photoabout.jpeg";
import projectPhoto from "../images/todolist.png";
import { SiLinkedin, SiTelegram, SiGithub } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";

export default function Main({portfolioOwner}) {  
  return (
    <div>
      {/* <div className="divider"></div> */}
      <div id="top" className="welcoming">
        <div className="sectionTexts">
          <p className="sectionHeaders">Hi, I’m {portfolioOwner}, <br/> I build things for the web.</p>
          <p className="allSmallTexts">I’m software developer and this is my portfolio.</p>
        </div>
        <button onClick={() => window.open("https://drive.google.com/file/d/1QW-PpECKCHP01VR38Dz5rVj5smOYzPDd/view", "_blank")}>
          Check out my CV
        </button>
      </div>
      <div className="divider"></div>

      <div id="about" className="sectionAbout">
        <div className="about">
          <p className="sectionHeaders">About me</p>
        </div>
        <div className="about1">
          <div className="about2">
            <p className="allSmallTexts">
              In 2022 I decided to change my profession and now I am studying at NFactorial. 
              <br/> Successfully completed the Start and Web Intro modules. 
              <br/> From March to May 2023 I will study Web Advanced.
            </p>
            <p className="allSmallTexts">Skills, Stacks & Tools :</p>
            <div className="aboutSkills">
              <ul className="skills">
                <li className="allSmallTexts">Java</li>
                <li className="allSmallTexts">HTML, CSS, Javascript</li>
                <li className="allSmallTexts">React JS</li>
              </ul>
              <ul>
                <li className="allSmallTexts">Bootstrap, Material UI</li>
                <li className="allSmallTexts">Kazakh, Russian, English, Turkish</li>
                <li className="allSmallTexts">1C: Accountant</li>
              </ul>
            </div>
          </div>
          <div className="image">
            <img src={photo} alt="img" style={{ width: 280, height: 360 }}/>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div id="experience" className="sectionExperience">
        <p className="sectionHeaders">Experience</p>
        {datas.experience.map((item, index) => (
          <div className="experiences" key={index}>
            <p className="experienceDates">{item.date}</p>
            <div className="allAboutExperiences">
              <p className="position">{item.position}</p>
              <p className="company">{item.company}</p>
              <p className="location">{item.location}</p>
              <p className="description">
                {item.description.map((item, index) => (
                  <span key={index}> &nbsp; · &nbsp; {item} <br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="divider"></div>

      <div id="project" className="sectionProject">
        <p className="sectionHeaders">Project I've Worked On</p>
        <div className="project">
          <div className="image">
            <img src={projectPhoto} alt="img" style={{ width: " 100%", height: 400 }}/>
          </div>
          <div className="aboutProject">
            <p className="projectName">Simple To Do List</p>
            <p className="allSmallTexts" style={{marginBottom: "-10px"}}>Created app from scratch while learning React JS.</p>
            <p className="allSmallTexts">React JS, HTML, CSS</p>
            <div className="contactButtons">
            <button  onClick={() => window.open("https://github.com/moon-blaze/nfactorial-project-simple-to-do-list-Feb19", "_blank")}>
              <SiGithub size={50}/>
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div id="contact" className="sectionContacts">
        <div className="sectionTexts">
          <p className="sectionHeaders">Say Hello!</p>
          <p className="allSmallTexts">I’m software developer and this is my portfolio.</p>
          <p className="allSmallTexts" style={{marginBottom: "50px", marginTop: "50px"}}>Get in touch via:</p>
        </div>
        <div className="contactButtons">
          <button style={{backgroundColor: "transparent"}} onClick={() => window.open("mailto:aydanaserik99@gmail.com", "_blank")}>
            <IoMdMail size={58}/>
          </button>
          <span> / </span>
          <button onClick={() => window.open("https://t.me/+77087044444", "_blank")}>
            <SiTelegram size={50} />
          </button>
          <span> / </span>
          <button onClick={() => window.open("//wa.me/+77087044444", "_blank")}>
            <RiWhatsappFill size={58}/>
          </button>
          <span> / </span>
          <button onClick={() => window.open("https://www.linkedin.com/in/aidana-serik/", "_blank")}>
            <SiLinkedin size={48} />
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};