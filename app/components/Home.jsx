/*eslint-disable camelcase*/
/*eslint-disable no-alert*/
import React, { Component } from 'react'
import Modal from 'react-modal'

import Cards from './Cards'
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
    this.setState(
      {
        selectedProject: tiles.projectTiles.find(project => project.title === title)
      },
      () => document.getElementsByClassName('single-project')[0].scrollIntoView(false)
      )
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
    if (!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    .test(reply_email)) {
      alert('Please enter a valid email address')
      return null
    }
    /*eslint-disable no-undef*/
    emailjs.send('gmail', 'template_dwI46kfU', { from_name, reply_email, message })
    /*eslint-enable no-undef*/
      .then(() => alert('Message sent successfully!'))
      .then(() => document.getElementById('email').reset())
      .then(() => this.changeModalView())
      .catch(err => {
        alert('Unfortunately, the email service is down.  Please manually send me an email at mike.peritz@gmail.com or wait a few hours and try again.  Sorry for this inconvenience!')
        console.error(err)
      })
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
        <Cards tiles={tiles.nerpTiles} useClass="nerp-card" />
        <br />
        <div className="center">
          <h3>Check out some of my work!</h3>
          <p>Click each project for more information and a link.</p>
        </div>
        <Cards tiles={tiles.projectTiles} useClass="project-card" setProject={this.setProject} />
        <br />
        <br />
        {this.state.selectedProject.title && <SingleProject project={this.state.selectedProject} />}
        <ContactButtons modalIsOpen={this.state.modalIsOpen} changeModalView={this.changeModalView} />
        <div className="modal-wide">
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.changeModalView}
            contentLabel="Lets get in touch!"
            style={styles.emailModal}
          >
            <EmailForm setName={this.setName} setEmail={this.setEmail} setMessage={this.setMessage} sendEmail={this.sendEmail} closeModal={this.changeModalView} />
          </Modal>
        </div>
      </div>
    )
  }
}

// tiles went on line 68 <Tiles tiles={tiles.nerpTiles} label={'nerp'} /> after div id=nerd
// tiles went on line 74 after div className = center <Tiles tiles={tiles.projectTiles} label={'projects'} setProject={this.setProject} />
