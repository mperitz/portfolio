import React from 'react'

const App = ({ children }) => {
  return (
    <div>
      <div className="row top-bar">
        <div id="mike" className="col-xs-5"><h3>Mike</h3></div>
        <div className="col-xs-2"><img id="face" src="./img/mike-logo.png" /></div>
        <div id="peritz" className="col-xs-5"><h3>Peritz</h3></div>
      </div>
      <div>{ children }</div>
    </div>
  )
}

export default App
