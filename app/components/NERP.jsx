import React from 'react'

import {GridList, GridTile} from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '97%',
    height: 380,
    overflowY: 'auto',
  },
  textList: {
    width: '97%',
    height: 230,
    overflowY: 'auto',
  },
  tile: {
    border: 'solid 1px',
  }
}

const nerpTiles = [
  {
    img: './img/nodejs-logo.png',
    title: 'Node.js',
    about: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',
  },
  {
    img: './img/express-logo.jpg',
    title: 'Express.js',
    about: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware, it makes creating a RESTful API quick and easy.',
  },
  {
    img: './img/react-redux-logo.jpg',
    title: 'React/Redux',
    about: 'React makes it painless to create interactive UIs by efficiently updating and rendering just the right components when data changes. React lets you build encapsulated components that manage their own state, then compose them to make complex UIs.  React also works well with Redux, a "single source of truth" state management system.'
  },
  {
    img: './img/postgres-logo.png',
    title: 'PostgreSQL',
    about: 'PostgreSQL is a powerful, open source object-relational database system. It has more than 15 years of active development and a proven architecture that has earned it a strong reputation for reliability, data integrity, and correctness.'
  },
]

const NERP = () => {
  return (
    <div>
      <div className="nerd">
        <h1>I am a total NERP!</h1>
        <h4>A NERP?  That means I use the NERP stack to create dynamic, scalable applications.  What's the NERP stack?</h4>
      </div>
      <br />
      <div style={styles.root}>
        <GridList
          cellHeight={360}
          style={styles.gridList}
          cols={4}
        >
          {nerpTiles.map((tile) => (
            <GridTile
              className="tile"
              key={tile.img}
              cols={1}
              style={styles.tile}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
      <div style={styles.root}>
        <GridList
          cellHeight={230}
          style={styles.textList}
          cols={4}
        >
          {nerpTiles.map((tile) => (
            <GridTile
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

export default NERP
