import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>
        Posted by {project.authFirstName} {project.authorLastName}
      </p>
      <p className="grey-text">3rd of Semptember, 3am</p>
    </div>
  );
};

export default ProjectSummary;
