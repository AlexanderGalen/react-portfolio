import React from 'react';

export default function Project({ image, title, github, link }) {
  return (
    <div className="project">
      <a href={link}><h2>{title}</h2></a>
      <img src={image} alt={`screenshot of project`} />
    </div>
  );
}
