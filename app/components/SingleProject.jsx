import React from 'react'

const SingleProject = props => {
  return (
    <div className="center single-project">
      <h2 className="center">{props.project.title}</h2>
      <iframe width="560" height="315" src={props.project.iframe} frameBorder="0" allowFullScreen></iframe>
      <h4 style={{ paddingLeft: 100, paddingRight: 100 }}>{props.project.about}</h4>
      {props.project.tech && <p>Technologies: {props.project.tech}</p>}
      <p>Deployed at: <a href={props.project.url}>{props.project.url}</a></p>
    </div>
  )
}

export default SingleProject
