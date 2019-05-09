import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';


const ProjectDetails = (props) => {
  // console.log(props); //props.match.params.id
  // const id = props.match.params.id;
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signIn' />

  if (project) {
    return (
      <div className="container section project-details">
          <div className="card">
              <div className="card-content">
                  <div className="card-title">{ project.title }</div> 
                  <p>{ project.content }</p>
              </div>
              <div className="card action"></div> 
                  <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                  <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
      </div>
    )
} else {
    return(
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  } 
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]  : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)

