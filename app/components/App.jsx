import React from 'react'

import Icon from './Icon'

const App = ({ children }) => {
  return (
    <div>
      <div className="top-bar">
        <div className="center">
          <div id="mike"><h3 className="top-bar-text">Mike</h3></div>
          <div id="face"><img src="./img/mike-logo.png" /></div>
          <div id="peritz"><h3 className="top-bar-text">Peritz</h3></div>
        </div>
        <h5 className="center"><a href="https://www.github.com/mperitz"><Icon img="github"/></a>    •    203-247-9401    •    mike.peritz@gmail.com    •    <a href="https://www.linkedin.com/in/mike-peritz"><Icon img="linkedIn" /></a></h5>
      </div>
      <div>{ children }</div>
    </div>
  )
}

export default App
