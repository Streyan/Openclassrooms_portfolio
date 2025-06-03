interface Props {
  image: string;
  title: string;
  tags: string[];
  description: string;
  onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

function ModalContent({ onClose, image, title, tags, description }: Props) {
  return (
    <div className="flex-column dropdown">
      <div className="flex-row dropdown_header">
        <button onClick={onClose}>X</button>
      </div>
      <div className="flex-column dropdown_content">
        <div className="flex-row dropdown_content_title">
          <p className="dropdown_title headingM black">{title}</p>
          <div className="flex-row">
            {tags.map((tag) => (
              <p className="text black" key={tag}>
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-row dropdown_content_picture">
          <img src={image} alt="image du projet"></img>
        </div>
        <div className="flex-row text black">{description}</div>
      </div>
      <div className="flex-row dropdown_footer">
        <span onClick={onClose}>
          <p className="text black link button-underline">Fermer</p>
        </span>
      </div>
    </div>
  );
}

export default ModalContent;
