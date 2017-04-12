import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

const App = ({ children }) => {
  return (
    <div>
      <AppBar
        title="Mike Peritz"
        showMenuIconButton={true}
        iconElementLeft={<Link to="/home"><img style={{ height: 50, width: 50 }} src="./img/mike-logo.png" /></Link>}
      >
        <div style={{ marginTop: 12 }}>
          <Link to="/projects"><FlatButton label="Projects" /></Link>
          <FlatButton label="Skills" />
          <FlatButton label="Thoughts" />
          <FlatButton
            href="https://github.com/mperitz"
            target="_blank"
            icon={<FontIcon className="muidocs-icon-custom-github" />}
          />
          <FlatButton
            href="https://www.linkedin.com/in/mike-peritz/"
            target="_blank"
          >
            <img src="./img/linkedin-3-icon.png" style={{ height: 24, width: 24 }} />
          </FlatButton>
        </div>
      </AppBar>
      <div>{ children }</div>
    </div>
  )
}

export default App
