import React from 'react'

const ProjectDetails = (props) => {
  console.log(props); //props.match.params.id
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card">
            <div className="card-content">
                <div className="card-title">Project Title - { id }</div> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita hic esse veritatis? Asperiores saepe ea architecto quas iure, aut magni expedita iusto aperiam, eius eaque voluptates incidunt numquam cupiditate tenetur!</p>
            </div>
            <div className="card action"></div> 
                <div>Posted by Wippo</div>
                <div>9th May, 2015, 9am</div>
        </div>
    </div>
  )
}

export default ProjectDetails

