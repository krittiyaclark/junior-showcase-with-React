import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return(
        <div className="card project-summary">
            <div className="card-content text-secondary">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="text-secondary">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;