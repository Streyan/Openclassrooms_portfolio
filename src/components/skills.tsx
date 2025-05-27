import Skill from "./skill";
import skills from "../../skills.json";

function Skills() {
  return (
    <div className="flex-row skills">
      {skills.map((skill) => (
        <Skill xp={skill.xp} title={skill.name} />
      ))}
    </div>
  );
}

export default Skills;
