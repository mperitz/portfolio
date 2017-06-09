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
        <div style={styles.root}>
          <GridList
            cellHeight={360}
            style={styles.gridList}
            cols={applicationsTiles.length}
          >
            {applicationsTiles.map((tile) => (
              <GridTile
                key={tile.img}
                className="project-tile"
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
