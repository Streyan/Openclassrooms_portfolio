import { useState } from "react";
import Modal from "react-modal";

interface Props {
  content: string;
}

function CollapsibleText({ content }: Props) {
  const [isCollapseOpen, setCollapse] = useState<boolean>(false);

  return (
    <div className="flex-column dropdown">
      <button
        className="dropdown_header_arrow"
        onClick={() => setCollapse(true)}
      >
        <p className="text black link button-underline">En savoir plus</p>
      </button>
      <Modal isOpen={isCollapseOpen}>
        <p className="text black">{content}</p>
        <button onClick={() => setCollapse(false)}>Fermer</button>
      </Modal>
    </div>
  );
}

export default CollapsibleText;
