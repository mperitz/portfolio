import React, { Component } from 'react'

import {GridList, GridTile} from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'

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

export default class extends Component {
  render() {
    return (
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
            >
              <a href={tile.url}><img src={tile.img} /></a>
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}
