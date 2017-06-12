import React from 'react'

const App = ({ children }) => {
  return (
    <div>
      <div className="top-bar">
        <div className="center">
          <div id="mike"><h3 className="top-bar-text">Mike</h3></div>
          <div id="face"><img src="./img/mike-logo.png" /></div>
          <div id="peritz"><h3 className="top-bar-text">Peritz</h3></div>
        </div>
      </div>
      <div>{ children }</div>
    </div>
  )
}

export default App
