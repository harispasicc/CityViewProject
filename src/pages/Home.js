import React from "react";

import Modal from "../comps/Modal";

import useModal from "../hooks/useModal";

import ImageGrid from "../comps/ImageGrid";

function Home() {
  const { toggle, visible } = useModal();

  const onSave = ({ name, imageUrl }) => {
    console.log({ name, imageUrl });
  };

  return (
    <div>
      <div className="home-container">
        <button className="add-button" onClick={toggle}>
          Add new city
        </button>
      </div>
      <Modal visible={visible} toggle={toggle} onSave={onSave} />
      <ImageGrid />
    </div>
  );
}

export default Home;
