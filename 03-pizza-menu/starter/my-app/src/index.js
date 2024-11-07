import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginnner",
    color: "#FF3B00",
  },
];

function Avatar() {
  return <img src="827.png" alt="me" />;
}

function Intro() {
  return (
    <div>
      <h2 className="title">Jonas Schmedtmann</h2>
      <p>
        Full-stack web developer and teacher atUdemy.When not coding or
        preparing acourse,Ilike to play board games,tocook(and eat),or to just
        enjoy thePortuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return skills.map((skill) => <Skill skill={skill} key={skill.skill} />);
}

function Skill({ skill }) {
  return (
    <div className="skill">
      <span style={{ backgroundColor: skill.color }}>{skill.skill}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one skillcomponentfor each web dev skill that you have,customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
