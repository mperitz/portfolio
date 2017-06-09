/*eslint-disable camelcase*/
import React, { Component } from 'react'
import Modal from 'react-modal'

import Tiles from './Tiles'
import SingleProject from './SingleProject'
import ContactButtons from './ContactButtons'
import EmailForm from './EmailForm'
import Greeting from './Greeting'

import * as tiles from '../tiles'
import styles from '../styles'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
      selectedProject: {},
      from_name: '',
      reply_email: '',
      message: ''
    }
    this.changeModalView = this.changeModalView.bind(this)
    this.setProject = this.setProject.bind(this)
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }
  changeModalView() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen })
  }
  setProject(title) {
    this.setState({ selectedProject: tiles.projectTiles.find(project => project.title === title) })
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
    const { from_name, reply_email, message } = this.state
    ev.preventDefault()
    emailjs.send('gmail', 'template_dwI46kfU', { from_name, reply_email, message })
      .then(() => alert('Message sent successfully!'))
      .then(() => document.getElementById('email').reset())
      .then(() => this.changeModalView())
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div>
        <div className="intro" >
          <Greeting />
        </div>
        <div className="nerd">
          <h1>I am a total NERP!</h1>
          <h4>A NERP?  That means I use the NERP stack to create dynamic, scalable applications.  What's the NERP stack?</h4>
        </div>
        <Tiles tiles={tiles.nerpTiles} label={'nerp'} />
        <br />
        <div className="center">
          <h3>Check out some of my work!</h3>
          <p>Click each project for more information and a link.</p>
        </div>
        <Tiles tiles={tiles.projectTiles} label={'projects'} setProject={this.setProject} />
        {this.state.selectedProject.title && <SingleProject project={this.state.selectedProject} />}
        <ContactButtons modalIsOpen={this.state.modalIsOpen} changeModalView={this.changeModalView} />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.changeModalView}
          contentLabel="Lets get in touch!"
          style={styles.emailModal}
        >
        <EmailForm setName={this.setName} setEmail={this.setEmail} setMessage={this.setMessage} sendEmail={this.sendEmail} />
        </Modal>
      </div>
    )
  }
}
