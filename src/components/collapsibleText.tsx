import { useState } from "react";
import Modal from "react-modal";
import ModalContent from "./modalContent";

interface Props {
  image: string;
  title: string;
  tags: string[];
  description: string;
}

function CollapsibleText({ image, title, tags, description }: Props) {
  const [isCollapseOpen, setCollapse] = useState<boolean>(false);

  function closeModal() {
    setCollapse(false);
  }

  return (
    <div className="flex-column dropdown">
      <button
        className="dropdown_header_arrow"
        onClick={() => setCollapse(true)}
      >
        <p className="text black link button-underline">En savoir plus</p>
      </button>
      <Modal
        isOpen={isCollapseOpen}
        appElement={document.getElementById("root") || undefined}
      >
        <ModalContent
          onClose={closeModal}
          image={image}
          title={title}
          tags={tags}
          description={description}
        />
      </Modal>
    </div>
  );
}

export default CollapsibleText;
