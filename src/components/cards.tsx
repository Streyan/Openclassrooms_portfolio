import Card from "./card";
import projets from "../../projets.json";

function Cards() {
  return (
    <div className="flex-column cards_title">
      <h1 className="headingXL black">Projects</h1>
      <div className="cards">
        {projets.map((projet) => (
          <Card
            title={projet.title}
            imageURL={projet.cover}
            tags={projet.tags}
            codeLink={projet.codeLink}
            projectLink={projet.projectLink}
            key={projet.title}
            description={projet.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
