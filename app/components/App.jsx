import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

const styles = {
  appBarIcon: {
    bottom: 14,
    right: 14
  },
  div: {
    marginTop: 12
  },
  iconButton: {
    bottom: 3,
  }
}

const App = ({ children }) => {
  return (
    <div>
      <AppBar
        title="Mike Peritz"
        showMenuIconButton={true}
        iconElementLeft={
          <Link to="/home">
            <IconButton tooltip="Home" tooltipPosition="bottom-right" style={styles.appBarIcon}>
              <img src="./img/mike-logo.png" />
            </IconButton>
          </Link>
        }
      >
        <div style={styles.div}>
          <IconButton href="https://github.com/mperitz" iconClassName="muidocs-icon-custom-github" tooltip="Github" />
          <IconButton href="https://www.linkedin.com/in/mike-peritz/" tooltip="LinkedIn">
            <img src="./img/linkedin-3-icon.png" />
          </IconButton>
        </div>
      </AppBar>
      <div>{ children }</div>
    </div>
  )
}

export default App
