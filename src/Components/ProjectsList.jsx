import React from 'react';
import Project from './Project'

const ProjectsList = () => {
  return (
    <div>
      <h2>Projects</h2>
      < Project projectName="Lucid-QL" intro="123" techUsed="javascript" />
      < Project projectName="Tindog" intro="123" techUsed="javascript" />
      < Project projectName="Social Scrapbook" intro="123" techUsed="javascript" />
      < Project projectName="Personal Website" intro="123" techUsed="javascript" />
    </div>
  )
}

export default ProjectsList;