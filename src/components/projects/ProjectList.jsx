import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      <div className="card z-deph-0 project-summary">
        {projects &&
          projects.map(project => (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProjectList;
