import React from 'react';

function ProjectItem({ image, name, url, description }) {
  return (
    <div className='projectItem'>
      <a href={url} target='_blank'>
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
        <h2> {name} </h2>
        <p> {description} </p>
      </a>
    </div>
  );
}

export default ProjectItem;
