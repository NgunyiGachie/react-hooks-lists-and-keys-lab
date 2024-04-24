import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>{about}</p>
      <p>Technologies:</p>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {technologies.map((tech, index) => (
          <li key={index}><span>{tech}</span></li>
        ))}
      </ul>
    </li>
  );
}

export default ProjectItem;


