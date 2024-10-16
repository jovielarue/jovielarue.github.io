import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="resume">
      <div className="resume-header">
        <div className="resume-hero">
          <h1>Jovie LaRue</h1>
          <p>joshua.larue@edu.sait.ca</p>
        </div>
      </div>
      <main>
        <div className="resume-section-container">
          <section className="resume-section">
            <h2>education</h2>
            <div className="resume-section-grouping">
              <h3>sait</h3>
              <h4>sept. 2023 - present</h4>
            </div>
            <p>
              i am currently studying in the software development program at the
              sait school for advanced digital technology, standing at a 4.0
              gpa.
            </p>
            <p>my first and second year course material has covered:</p>
            <ul>
              <li>html, css, and javascript</li>
              <li>python</li>
              <li>c#/.net</li>
              <li>java</li>
              <li>git</li>
              <li>sql and pl/sql</li>
              <li>critical thinking and logic</li>
            </ul>
          </section>
          <section className="resume-section">
            <h2>experience</h2>
            <h4>
              <Link to="/projects">see projects tab</Link>
            </h4>
            <div className="resume-section-grouping">
              <ul>
                <li>entry system for a local business</li>
                <li>
                  managing client wordpress installations and creating wordpress
                  sites
                </li>
                <li>several web projects utilizing react and next.js</li>
                <li>sait coursearch: placed third in a sait-run hackathon</li>
                <li>yyc-iosk: placed fourth in the yychacks 2024 hackathon</li>
              </ul>
            </div>
          </section>
          <section className="resume-section">
            <h2>hobbies</h2>
            <ul>
              <li>music production</li>
              <li>web development for friends and family</li>
              <li>reading and writing</li>
              <li>keeping up with tech news</li>
              <li>neovim</li>
            </ul>
          </section>
          <section className="resume-section">
            <h2>about me</h2>
            <p id="resume-about">
              i am a full-stack developer with a passion for helping people
              create originative solutions to their problems. i am great at
              working collaboratively, incredible at learning quickly, and
              always am willing to take on a challenge.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
