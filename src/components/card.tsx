interface Props {
  title: string;
  imageURL: string;
  tags: string[];
  codeLink: string;
  projectLink: string;
}

function Card({ title, imageURL }: Props) {
  return (
    <div>
      <p className="card_title">{title}</p>
      <div className="card_background zoom">
        <div className="card_blur"></div>
        <img
          className="card_picture "
          src={imageURL}
          alt="image de la location"
        />
      </div>
      <p>tags</p>
    </div>
  );
}

export default Card;
