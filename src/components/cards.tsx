import Card from "./card";
import projets from "../../projets.json";

function Cards() {
  return (
    <div>
      <h1 className="headingXL">Projects</h1>
      <div className="cards">
        {projets.map((projet) => (
          <Card
            title={projet.title}
            imageURL={projet.cover}
            tags={projet.tags}
            codeLink={projet.codeLink}
            projectLink={projet.projectLink}
            key={projet.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
