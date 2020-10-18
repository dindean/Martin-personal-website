import React from 'react';
import { withRouter } from 'react-router-dom';

import './Project.scss';

const Project = ({ projectName, imageUrl, techUsed, intro }) => {
  return (
    <div className="project-item">
      <div className="project-content">
        <img src={imageUrl} alt="project-pic" className="project-pic" />
        <h1 className="project-name">{projectName.toUpperCase()}</h1>
        <br />
        <span>{'Core Tech: ' + techUsed}</span>
        <br />
        <span className="project-intro">{intro}</span>
        <br />
        <button>{`See ${projectName}'s github page`}</button>
      </div>
    </div>
  );
};

export default withRouter(Project);