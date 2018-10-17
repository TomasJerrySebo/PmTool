import React from "react";
import moment from "moment";
const ProjectSummary = ({ project }) => {
  return (
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{project.title}</span>
      <p>
        Posted by {project.authFirstName} {project.authorLastName}
      </p>
      <p className="grey-text">
        {moment(project.createdAt.toDate().toString()).calendar()}
      </p>
    </div>
  );
};

export default ProjectSummary;
