import React, { Component } from 'react'

import { GridList, GridTile } from 'material-ui/GridList'
import Modal from 'react-modal'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '90%',
    height: 900,
    overflowY: 'auto',
    marginTop: 20
  },
  modal: {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 800
    }
  },
  title: {
    textAlign: 'center'
  },
  img: {
    height: 364,
    width: 718,
    border: '1px solid black',
    margin: 'auto',
    display: 'block'
  }
}

const applicationsTiles = [
  {
    img: './img/jam-map.png',
    title: 'The Jam Map',
    about: 'A filterable map that shows users live music in their area. The Jam Map allows you to filter shows by date range, genre, and artist name, and also provides detailed information about each show.  To get you hyped for the show, The Jam Map also provides 30 second song clips by the performing artist.',
    url: 'https://the-jam-map.herokuapp.com',
    tech: 'React, Redux, Node.js, Express.js, AJAX, Material UI, Google Maps API, Ticketmaster API, Spotify API'
  },
  {
    img: './img/pair-it.png',
    title: 'Pair.It',
    about: 'A desktop application built for remote pair programming. Pair.It combines peer-to-peer video, live two-way code editing, and version control through Git and Github to allow pair partners to program together from anywhere.',
    url: 'https://pair-it.herokuapp.com',
    tech: 'React, Redux, Node.js, Express.js, Passport OAuth, WebRTC, Socket.io, Simple-Git, Github API, Enzyme, Jest'
  },
  {
    img: './img/tech-talk.png',
    title: 'Handling Asynchronicity in JavaScript',
    about: "A 10 minute talk discussing asynchronous methods in JavaScript. Topics covered include callbacks, promises, streams, reactive programming, and async-await.  Skip to the end of the video for some useful resources in helping deal with difficult asynchronous situations.",
    url: 'https://www.youtube.com/watch?v=dSAaLFhlRrc',
  }
]

export default class extends Component {

  constructor() {
    super()
    this.state = {
      modalIsOpen: {}
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    applicationsTiles.map(app => {
      this.setState({ modalIsOpen: Object.assign({}, this.state.modalIsOpen, { [app.img]: false }) })
    })
  }

  openModal(id) {
    this.setState({ modalIsOpen: Object.assign({}, this.state.modalIsOpen, { [id]: true }) })
  }

  closeModal(id) {
    this.setState({ modalIsOpen: Object.assign({}, this.state.modalIsOpen, { [id]: false }) })
  }

  render() {
    return (
      <div>
        <div className="center">
          <h3>Check out some of the things I've created!</h3>
          <p>Click each project for more information and a link to the project.</p>
        </div>
        <div style={styles.root}>
          <GridList
            cellHeight={360}
            style={styles.gridList}
            cols={applicationsTiles.length}
          >
            {applicationsTiles.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                titleBackground= "rgba(0, 0, 0, 0.8)"
                subtitle={<span><b>{tile.about.split('.')[0]}</b></span>}
                cols={1}
                onClick={() => this.openModal(tile.img)}
              >
                <img src={tile.img} />
                <Modal
                  isOpen={this.state.modalIsOpen[tile.img]}
                  onRequestClose={() => this.closeModal(tile.img)}
                  style={styles.modal}
                  contentLabel={tile.title}
                >
                  <h2 style={styles.title}>{tile.title}</h2>
                  <img src={tile.img} style={styles.img} />
                  <h4>{tile.about}</h4>
                  {tile.tech && <p>Technologies: {tile.tech}</p>}
                  <p>Deployed at: <a href={tile.url}>{tile.url}</a></p>
                </Modal>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}
