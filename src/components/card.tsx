interface Props {
  title: string;
  imageURL: string;
  tags: string[];
  codeLink: string;
  projectLink: string;
}

function Card({ title, imageURL, tags, codeLink, projectLink }: Props) {
  return (
    <div className="flex-column zoom">
      <div className="card_background">
        <img className="card_picture" src={imageURL} alt="image du projet" />
      </div>
      <p className="card_title headingM">{title}</p>
      <div className="flex-row">
        {tags.map((tag) => (
          <p className="text">{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Card;
