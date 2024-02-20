import React from "react";
import ImgsViewer from "react-images-viewer";
const ReactImageViewer = ({
  imgs,
  isOpen,
  onClose,
  currImg,
  onClickPrev,
  onClickNext,
}) => (
  <ImgsViewer
    imgs={imgs}
    isOpen={isOpen}
    onClose={onClose}
    currImg={currImg}
    onClickPrev={onClickPrev}
    onClickNext={onClickNext}
  />
);

export default ReactImageViewer;
