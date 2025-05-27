import Skill from "./skill";
import skills from "../../skills.json";

function Skills() {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <Skill xp={skill.xp} title={skill.name} key={skill.name} />
      ))}
    </div>
  );
}

export default Skills;
