import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import Icon from './Icon'

export default (props) => {
  return (
    <div id="contact">
      <RaisedButton id="green-btn" className={`line-btn${props.modalIsOpen ? ' invisible' : ''}`} label="Medium" primary={true} icon={<Icon img="medium" />} href="https://medium.com/@mike.peritz" />
      <RaisedButton className={`line-btn${props.modalIsOpen ? ' invisible' : ''}`} label="Linked In" primary={true} icon={<Icon img="linkedIn" />} href="http://www.linkedin.com/in/mike-peritz/" />
      <RaisedButton className={`line-btn${props.modalIsOpen ? ' invisible' : ''}`} label="Github" default={true} icon={<Icon img="github" />} href="https://github.com/mperitz" />
      <RaisedButton className={`line-btn${props.modalIsOpen ? ' invisible' : ''}`} label="Email Me" secondary={true} icon={<Icon img="email" />} onClick={props.changeModalView} />
      <a href="/mike-peritz-resume.pdf" download><RaisedButton id="orange-btn" className={`line-btn${props.modalIsOpen ? ' invisible' : ''}`} label="Resume" icon={<Icon img="resume" />} /></a>
    </div>
  )
}
