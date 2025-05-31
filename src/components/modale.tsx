import CollapsibleText from "./collapsibleText";
import Link from "./link";

interface Props {
  title: string;
  imageURL: string;
  tags: string[];
  description: string;
  codeLink: string;
  projectLink: string;
}

function Modale({
  title,
  imageURL,
  tags,
  description,
  codeLink,
  projectLink
}: Props) {
  return (
    <div className="flex-column zoom">
      <div className="card_background">
        <img
          className="card_picture"
          src={imageURL}
          alt="image du projet"
        ></img>
      </div>
      <p className="card_title headingM black">{title}</p>
      <div className="flex-row">
        {tags.map((tag) => (
          <p className="text black" key={tag}>
            {tag}
          </p>
        ))}
      </div>
      <div className="flex-row">
        <CollapsibleText content={description} />
        <Link title="Voir le projet" url={projectLink} />
        <Link title="Voir le code" url={codeLink} />
      </div>
    </div>
  );
}

export default Modale;
