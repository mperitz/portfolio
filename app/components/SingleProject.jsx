import React from 'react'

const SingleProject = props => {
  return (
    <div className="center single-project">
      <h2 className="center">{props.project.title}</h2>
      <iframe className="iframe" src={props.project.iframe} frameBorder="0" allowFullScreen></iframe>
      <h4>{props.project.about}</h4>
      {props.project.tech && <p>Technologies: {props.project.tech}</p>}
      <p>Deployed at: <a href={props.project.url}>{props.project.url}</a></p>
    </div>
  )
}

export default SingleProject
