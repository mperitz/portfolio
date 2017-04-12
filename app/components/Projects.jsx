import React, { Component } from 'react'

import {GridList, GridTile} from 'material-ui/GridList'
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
  },
}

const applicationsTiles = [
  {
    img: './img/jam-map.png',
    title: 'The Jam Map',
    about: 'A filterable map that shows users live music in their area.',
    url: 'https://the-jam-map.herokuapp.com'
  },
  {
    img: './img/pair-it.png',
    title: 'Pair.It',
    about: 'A desktop application built for remote pair programming.',
    url: 'https://pair-it.herokuapp.com'
  },
  {
    img: 'jldjdkqweqwfewgrvr',
    title: 'Another Project',
    about: 'My third project.'
  },
]

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

export default class extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal() {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }
  render() {
    return (
      <div>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref="subtitle">Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
        <div style={styles.root}>
          <GridList
            cellHeight={360}
            style={styles.gridList}
            cols={4}
          >
            {applicationsTiles.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span><b>{tile.about}</b></span>}
                cols={1}
                onClick={this.openModal}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    )
  }
}
