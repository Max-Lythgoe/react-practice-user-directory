import React, {useState} from 'react';

import './NewSlide.css';
import SlideForm from './SlideForm'

const NewSlide = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveSlideDataHandler = (enteredSlideData) => {
        const slideData = {
            ...enteredSlideData,
            id: props.items.length + 1
        };
        props.onAddSlide(slideData);
        setIsEditing(false);
        console.log(slideData)
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
    <div className="new-slide">
        {!isEditing && <button onClick={startEditingHandler}>Add New User</button>}
        {isEditing && <SlideForm onSaveSlideData={saveSlideDataHandler}
        onCancel={stopEditingHandler} />}
    </div>
    )};

export default NewSlide