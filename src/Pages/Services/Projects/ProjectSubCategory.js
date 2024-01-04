import React from "react";
import { useParams } from "react-router-dom";

const ProjectSubCategory = () => {
  const { id } = useParams();
  return (
    <div style={{ marginTop: "200px" }}>
      <h3>This is page number {id}</h3>
    </div>
  );
};

export default ProjectSubCategory;
