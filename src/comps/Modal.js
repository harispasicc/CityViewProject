import React, { useState } from "react";
import UploadForm from "./UploadForm";
import { database } from "../firebase/config";

const Modal = ({ visible, toggle }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onSave = () => {
    database
      .ref("user")
      .set({
        name: name,
        imageUrl: imageUrl,
      })
      .catch(alert);
  };

  return visible ? (
    <div className="modal">
      <div className="modal-pop" role="dialog" aria-modal="true">
        <h3></h3>
        <UploadForm
          name={name}
          setName={setName}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
        />
        <button
          className="modal-button1"
          style={{
            color: "black",
            width: 100,
            height: 30,
            borderRadius: 5,
            fontWeight: "bold",
            fontSize: 15,
            position: "right",
          }}
          type="button"
          onClick={toggle}
        >
          Close
        </button>
        <button
          className="modal-button2"
          style={{
            color: "black",
            width: 100,
            height: 30,
            borderRadius: 5,
            fontWeight: "bold",
            fontSize: 15,
            position: "right",
          }}
          type="button"
          onClick={() => onSave({ name, imageUrl })}
        >
          Save
        </button>
      </div>
      <div className="modal-overlay"></div>
    </div>
  ) : null;
};

export default Modal;
