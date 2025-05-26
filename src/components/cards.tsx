import Card from "./card";
import logements from "../../logements.json";

function Cards() {
  return (
    <div className="cards">
      {logements.map((logement) => (
        <Card
          title={logement.title}
          imageURL={logement.cover}
          tags={logement.tags}
          codeLink={logement.codeLink}
          projectLink={logement.projectLink}
        />
      ))}
    </div>
  );
}

export default Cards;
