import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img key={image.id} src={image.webformatURL} alt="some pics" />;
  });
  return <div>{images}</div>;
};

export default ImageList;
