import React, {useState} from 'react'

import './slide.css';
import Navigation from './navigation'

const Slide = (props) => {
    const [index, setIndex] = useState(0);
    // const currentIndex = (props.items.indexOf(props.items[index].names) +2)

    // console.log(currentIndex)

  return (
    <div className="container-slide">
        <div className="info">
        <h1 className="item title">{props.items[index].names}</h1>
        <p className="item main"><b>From: </b> {props.items[index].from}</p>
        <p className="item main"><b>Job Title: </b>{props.items[index].jobTitle}</p>
        <p className="item main"><b>Employer: </b>{props.items[index].employer}</p>
        <p className="item main"><b>Favorite Movies:</b></p>
        <ol className="item-movies">
            <li>{props.items[index].movies[0]}</li>
            <li>{props.items[index].movies[1]}</li>
            <li>{props.items[index].movies[2]}</li>
        </ol>
        <h1 className="number"> {index + 1} / {props.items.length}</h1>
        </div>
        <Navigation items={props.items} index={index} setIndex={setIndex} />
    </div>
  )
}



export default Slide