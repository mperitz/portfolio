import React from 'react'
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card'

export default (props) => {
  return (
    <div className={props.className || 'cards'}>
    {props.tiles.map(tile => (
      <Card className={props.useClass} key={tile.img} onClick={() => props.setProject(tile.title)}>
        <CardMedia className="card-image"><img src={tile.img} /></CardMedia>
        <div className="card-text">
          <CardTitle title={tile.title} />
          <CardText className="card-text-small">{tile.about}</CardText>
        </div>
      </Card>
    ))}
    </div>
  )
}
