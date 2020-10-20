import React from 'react';
import Project from './Project'
import projectsData from './projectsData'

const ProjectsList = () => {
  return (
    <div>
      <h2>Projects</h2>
      {projectsData.map(project => < Project projectName={project.name} intro={project.intro} techUsed={project.techUsed} />)}
      {/* < Project projectName="Lucid-QL" intro="123" techUsed="javascript" />
      < Project projectName="Tindog" intro="123" techUsed="javascript" />
      < Project projectName="Social Scrapbook" intro="123" techUsed="javascript" />
      < Project projectName="Personal Website" intro="123" techUsed="javascript" /> */}
    </div>
  )
}

export default ProjectsList;