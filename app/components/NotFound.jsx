import React from 'react'
import { Link } from 'react-router'

const NotFound = props => {
  const {pathname} = props.location || {pathname: '<< no path >>'}
  console.error('NotFound: %s not found (%o)', pathname, props)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Sorry, I couldn't find <pre>{pathname}</pre></h1>
      <p>Lost? <Link to="/">Here's a way home.</Link></p>
      <img src="./img/face.jpg"></img>
      <cite>~ xoxo, Mike.</cite>
    </div>
  )
}

export default NotFound
