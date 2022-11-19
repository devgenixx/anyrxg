import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Apostatis": {
        title: "Apostatis",
        desc:
          "Apostatis is a code player, where one can code using html, css and js",
        techStack: "Jquery",
        link: "https://github.com/devgenixx/Apostatis-Codeplayer",
        open: "https://devgenixx.github.io/Apostatis-Codeplayer/",
        image: "/assets/apostatis-devgenixx.png"
      },
      "One Punch Fight": {
        title: "One Punch Fight",
        desc:
          "A one on one (PvP) punching arcade game, by implementing 60% Js",
        techStack: "JAVASCRIPT (THREE.JS)",
        link: "https://github.com/devgenixx/One-punch-fight",
        open: "https://devgenixx.github.io/One-punch-fight/",
        image: "/assets/one-punch-devgenixx.png"
      },
     /* "Tall Tales": {
        title: "tall tales",
        desc:
          "A multi-player story-telling web game for 3-5 players. Its usage of sockets to allow for concurrent gameplay, connecting friends across the internet.",
        techStack: "NODE.JS (SOCKET.IO), REACT.JS, MONGODB",
        link: "https://github.com/gazijarin/TallTales",
        open: "https://talltales.herokuapp.com/",
        image: "/assets/talltales.png"
      },*/
      "Portfolio": {
        title: "Portfolio- Chaos",
        desc:
          "A portfolio website, which is interactive and made with love.",
        techStack: "HTML, CSS",
        link: "https://github.com/devgenixx/Portfolio-CN",
        open: "https://devgenixx.github.io/Portfolio-CN/",
        image: "/assets/portfolio- devgenixx.png"
      }
    };
    const projects = {
      "Dupss": {
        desc:
          "Dupss Soulmates Forever is a front end one page site wherein the website is supposedly selling various breeds of dogs over the state.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/devgenixx/dupss",
        open: "https://devgenixx.github.io/dupss/"
      },
      "Tip- Calculator": {
        desc:
          "A tip calculator, that divides the overall cost including fees and tip, and divides as per the members",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/devgenixx/TipCalculator-CP",
        open: "https://devgenixx.github.io/TipCalculator-CP/"
      },
      "Garuru": {
        desc:
          "Basic Garuru app launch website",
        techStack: "Javascript, HTML / CSS (Bootstrap)",
        link: "https://github.com/devgenixx/garuru-app-site",
        open: ""
      },
      /*
      "Weather App": {
        desc:
          "A weather app to determine daily forecast, based on the API.",
        techStack: "Javascript, HTML / CSS",
        link:
          "https://github.com/devgenixx/Adv-Weather-App-Cp",
          open: "https://devgenixx.github.io/Adv-Weather-App-Cp/" 
      },
      
      "Game Centre": {
        desc:
          "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
        techStack: "Java, Android Studio",
        link: "https://github.com/gazijarin/gamecentre",
        open: ""
      },
      "Minimax Stonehenge": {
        desc:
          "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
        techStack: "Python",
        link: "https://github.com/gazijarin/stonehenge",
        open: ""
      }*/
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ project-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
