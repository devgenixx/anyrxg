import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p> 
        I am currently a third year B.tech in <b>Information Technology</b> junior at
        <a href="https://www.nitsri.ac.in/">
          {" "}
          National Intitute of Technology, Srinagar
        </a>
        . I am interested in learning and experience everything that is on my life's to-do list.
        I am a part of various clubs at <b>NIT Srinagar</b>, such as 
        {" "}
        <a href="https://www.linkedin.com/company/semicolon-nitsgr/mycompany/">Semicolon</a>,
        {" "}
        <a href="https://twitter.com/nitsriofficial/status/1532384955623706624?lang=en">The Art and Culture Club</a>, and 
        {" "}
        <a href="https://tedxnitsrinagar.in/">TEDxNITSrinagar</a> under which I have organised a lot of events.
        
      </p>
    );
    const two = (
      <p>
        Outside of all of this, I am on the <b>basketball team</b> of NIT Srinagar. My indoor hobbies include  
        <b> sketching</b>, <b>reading</b> and <b>coding</b>. 

      </p>
      
    );
    /*const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:gazi.jarin@mail.utoronto.ca">
          gazi.jarin@mail.utoronto.ca
        </a>{" "}
        and let's talk.
      </p>
    );
     const desc_items = [one, two];
*/
    const tech_stack = [
      "Javascript ES6+",
      "C++",
      "React.js",
      "C",
      "Node.js",
      "HTML & CSS"
    ];

    // const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me3.jpg"} alt="#"/>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
