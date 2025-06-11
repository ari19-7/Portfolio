import React from "react";
import PropTypes from "prop-types";
// import '/workspaces/cs220-portfolio-chatyuto/src/components/projectHeader/ProjectHeader.css';
import "./ProjectHeader.css";

const ProjectHeader = ({ title, content }) => {
  return (
    <div className="project-header">
      <h1>{title}</h1>
      <div className="project-content">
        {content ? content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </div>
    </div>
  );
}

// const UsesHeader = ({ title, content }) => {
//   return (
//     <div className="uses-header">
//       <h1>{title}</h1>
//       <div className="uses-content">
//         {content ? content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
//       </div>
//     </div>
//   );
// }

export default ProjectHeader;
