import React from 'react'
import './navigation.css'

const Navigation = (props) => { 

    const next = () => {
        if ((props.index +1) !== props.items.length) {
            props.setIndex(props.index + 1)
        } 
    }

    const back = () => {
        if (props.index !== 0) {
        props.setIndex(props.index - 1)
        }
    }

    const deleteSlide = () => {
        if (props.items.length !== 1) {
        props.items.splice(props.index, 1)
        
        if (props.index !== 0) {
            props.setIndex(props.index - 1)
        } else {
            props.setIndex(0)
        }}
       
    }
    

  return (
    <div className="button-container">
        <button className="buttons" onClick={back}>Back</button>
        <button className="buttons" onClick={deleteSlide}>Delete</button>
        <button className="buttons" onClick={next}>Next</button>
    </div>
  )
}

export default Navigation