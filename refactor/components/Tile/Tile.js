import React from 'react'

import './Tile.css'

const Tile = (props) => {
  const colour = props.selected || props.matched ? {backgroundColor: props.color} : null;
  return (
    <div className='Tile' style={colour} onClick={() => props.handleTileClicked(props.id, props.color)}>
      {props.selected || props.matched ? <props.svg />  : null}
    </div>
  )
}

export default Tile
