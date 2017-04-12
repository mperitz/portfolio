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
    width: 1430,
    height: 230,
    overflowY: 'auto',
  },
  tile: {
    border: 'solid 1px',
  }
}

const nerdsTiles = [
  {
    img: './img/nodejs-logo.png',
    title: 'Node.js',
    about: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',
  },
  {
    img: './img/express-logo.png',
    title: 'Express.js',
    about: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware, it makes creating a RESTful API quick and easy.',
  },
  {
    img: './img/react-redux-logo.jpg',
    title: 'React/Redux',
    about: 'React makes it painless to create interactive UIs by efficiently updating and rendering just the right components when data changes. React lets you build encapsulated components that manage their own state, then compose them to make complex UIs.  React also works well with Redux, a "single source of truth" state management system.'
  },
  {
    img: './img/sequelize-logo.png',
    title: 'Databases with Sequelize',
    about: 'Sequelize is a promise-based database manager that uses Object Relational Mapping (ORM) for Node.js and io.js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.'
  },
]

const NERDS = () => {
  return (
    <div>
      <div className="nerd">
        <h1>I am a total NERD!</h1>
        <h4>Yeah, in life, but also as a software developer.  That means I use the NERDS stack to create dynamic, scalable applications.  What's the NERDS stack?</h4>
      </div>
      <br />
      <div style={styles.root}>
        <GridList
          cellHeight={360}
          style={styles.gridList}
          cols={4}
        >
          {nerdsTiles.map((tile) => (
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
          {nerdsTiles.map((tile) => (
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

export default NERDS
