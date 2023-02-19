import React from 'react'
import './Card.css';
const Card = (props) => {
  return (
       <div className='card'>
        <div className='cardtop'>
        <img src={props.img} width="350px" height="200px" margin="2rem" />
        </div>
      <div className='nameofcard'>
      <h4>{props.name}</h4>
      </div>
      </div>
  )
}

export default Card