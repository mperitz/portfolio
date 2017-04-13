import React, { Component } from 'react'

import NERP from './NERP'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from_name: '',
      reply_email: '',
      message: ''
    }
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }
  setName(ev) {
    ev.preventDefault()
    this.setState({ from_name: ev.target.value })
  }
  setEmail(ev) {
    ev.preventDefault()
    this.setState({ reply_email: ev.target.value })
  }
  setMessage(ev) {
    ev.preventDefault()
    this.setState({ message: ev.target.value })
  }
  sendEmail(ev) {
    ev.preventDefault()
    emailjs.send('gmail', 'template_dwI46kfU', this.state)
    .then(() => alert('Message sent successfully!'))
    .then(() => document.getElementById('email').reset())
    .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <div className="intro" />
        <NERP />
        <div className="why">
          <h1>Why the NERP stack?</h1>
          <ul>
            <li><span><b>The Virtual DOM</b></span><br />The developers of all the major front-end libraries (React, Angular, Ember) have converged on the idea of using virtual DOMs (React, Angular2, Ember's Glimmer) as a high-performance abstraction for describing and storing application states.</li>
            <li><span><b>Consistency</b></span><br />The React ecosystem has converged on a same set of standards - React, React-Router, Redux, and Webpack+Babel. This takes a lot of the guesswork out of implementations and development.</li>
            <li><span><b>Redux</b></span><br />Redux is awesome.  A very small library (2K lines of JavaScript) that encourages good functional programming practices.  Single source of truth and deterministic (replayable) mutations to that state are a great way to create maintainable apps.</li>
            <li><span><b>Testing</b></span><br />Testing the NERP stack is much easier than its competitors.  React's testing libraries (Enzyme, Jest) are a big contributor to this!</li>
          </ul>
        </div>
        <div>
          <h1 className="center">Lets get in touch!</h1>
          <form id="email">
            Name:<br />
            <input type="text" name="name" onChange={this.setName} /><br />
            E-mail:<br />
            <input type="text" name="mail" onChange={this.setEmail} /><br />
            Message:<br />
            <textarea id="message" type="text" name="comment" size="50" onChange={this.setMessage} /><br /><br />
            <input type="reset" value="Send" onClick={this.sendEmail} />
          </form>
        </div>
      </div>
  )
  }
}
