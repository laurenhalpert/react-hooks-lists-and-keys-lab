import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  let x = 0;
  const technologiesElement = technologies.map(tech => {
    x++;
    return <span key={x}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesElement}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
