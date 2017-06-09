import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'

import styles from '../styles'

class Tiles extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: {}
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    /*eslint-disable no-unused-expressions*/
    this.props.modal && this.props.tiles.map(app => {
      this.setState({ modalIsOpen: Object.assign({}, this.state.modalIsOpen, { [app.img]: false }) })
    })
    /*eslint-enable no-unused-expressions*/
  }

  openModal(id) {
    this.setState({ modalIsOpen: Object.assign({}, this.state.modalIsOpen, { [id]: true }) })
  }

  closeModal(id) {
    this.setState({ modalIsOpen: Object.assign({}, this.state.modalIsOpen, { [id]: false }) })
  }
  render() {
    return (
    <div id="nerp">
      <br />
      <div style={styles[this.props.label].root}>
        <GridList
          cellHeight={240}
          style={styles[this.props.label].gridList}
          cols={this.props.tiles.length}
        >
          {this.props.tiles.map((tile) => (
            <GridTile
              className={this.props.label === 'nerp' ? 'img-tile' : 'img-tile-projects'}
              key={tile.img}
              cols={1}
              onClick={this.props.label === 'projects' ? () => this.props.setProject(tile.title) : null}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
      <div style={styles.nerp.root}>
        <GridList
          cellHeight={230}
          style={styles.nerp.textList}
          cols={4}
        >
          {this.props.tiles.map((tile) => (
            <GridTile
              className={this.props.label === 'nerp' ? 'tile-text' : 'tile-text projects'}
              key={tile.title}
              cols={1}
            >
              <h4 style={{ textAlign: 'center', marginBottom: 0, fontWeight: 'bold' }}>{tile.title}</h4>
              <p style={{ padding: '5%' }}>{tile.about}</p>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
    )
  }
}

export default Tiles
