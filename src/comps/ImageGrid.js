import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log("docs", docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-container">
            <div className="img-name">City Name</div>
            <div className="img-wrap" key={doc.id}>
              <img src={doc.url} alt="uploaded pic" />
            </div>
            <div className="img-date">Date added</div>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
