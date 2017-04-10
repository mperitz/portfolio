import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

const App = ({ children }) => {
  return (
    <div>
      <AppBar
        title="Home"
        showMenuIconButton={false}
      >
        <Link to="/projects"><FlatButton label="Projects" /></Link>
        <FlatButton label="Skills" />
        <FlatButton label="Thoughts" />
        <FlatButton
          href="https://github.com/mperitz"
          target="_blank"
          icon={<FontIcon className="muidocs-icon-custom-github" />}
        />
      </AppBar>
      <div>{ children }</div>
    </div>
  )
}

export default App
