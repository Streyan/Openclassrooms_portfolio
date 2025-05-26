import Dropdown from "./dropdown";
import skills from "../../skills.json";

function Skills() {
  return (
    <div className="flex-column dropdowns">
      {skills.map((logement) => (
        <Dropdown key={logement.xp} title={logement.name} />
      ))}
    </div>
  );
}

export default Skills;
