import React, { Component } from 'react'
import Modal from 'react-modal'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import Nerp from './NERP'
import Projects from './Projects'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 450
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      from_name: '',
      reply_email: '',
      message: ''
    }
    this.changeModalView = this.changeModalView.bind(this)
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }
  changeModalView() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
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
      .then(() => this.changeModalView())
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <div className="intro" >
        </div>
        <Nerp />
        <br />
        <Projects />
        <RaisedButton id="contact-me" label="Contact Me!" secondary={true} onClick={this.changeModalView} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.changeModalView}
          contentLabel="Lets get in touch!"
          style={modalStyles}
        >
          <form id="email">
            <h4 className="center">Let's get in touch!</h4>
            <p>Input your name, email, and a brief message, and I'll be sure to get back to you!</p>
            <TextField floatingLabelText="Name" hintText="ex. Mike Michaelson" errorText="This field is required" onChange={this.setName} /><br />
            <TextField floatingLabelText="Email" hintText="ex. mike.michaelson@gmail.com" errorText="This field is required" onChange={this.setEmail} /><br />
            <TextField floatingLabelText="Message" defaultValue="Hi! I'd love to speak with you sometime about a project! Please email me back at the address provided." fullWidth={true} multiLine={true} rows={2} rowsMax={10} /><br />
            <br />
            <br />
            <RaisedButton label="Send" primary={true} onClick={this.sendEmail} />
          </form>
        </Modal>
      </div>
  )
  }
}
