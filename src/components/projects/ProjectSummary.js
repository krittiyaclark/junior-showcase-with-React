import React from 'react';

const ProjectSummary = ({project}) => {
    return(
        <div className="card project-summary">
            <div className="card-content text-secondary">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">Posted by the Wippo</p>
                <p className="text-secondary">1st July, 9am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;