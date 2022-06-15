import React, { useState } from 'react';

import "./SlideForm.css";

const SlideForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredFrom, setEnteredFrom] = useState('');
    const [enteredJob, setEnteredJob] = useState('');
    const [enteredEmployer, setEnteredEmployer] = useState('');
    const [enteredMovie1, setEnteredMovie1] = useState('');
    const [enteredMovie2, setEnteredMovie2] = useState('');
    const [enteredMovie3, setEnteredMovie3] = useState('');


  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);

  };

  const fromChangeHandler = event => {
    setEnteredFrom(event.target.value);

  };

  const jobChangeHandler = event => {
    setEnteredJob(event.target.value);

  };

  const employerChangeHandler = event => {
    setEnteredEmployer(event.target.value);

  };

  const movie1ChangeHandler = event => {
    setEnteredMovie1(event.target.value);

  };

  const movie2ChangeHandler = event => {
    setEnteredMovie2(event.target.value);

  };

  const movie3ChangeHandler = event => {
    setEnteredMovie3(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const slideData = {
        names: enteredName,
        from: enteredFrom,
        jobTitle: enteredJob,
        employer: enteredEmployer,
        movies: [enteredMovie1, enteredMovie2, enteredMovie3]
    };

    props.onSaveSlideData(slideData);
    setEnteredName('');
    setEnteredFrom('');
    setEnteredJob('');
    setEnteredEmployer('');
    setEnteredMovie1('');
    setEnteredMovie2('');
    setEnteredMovie3('');
  };

  return (
    <form onSubmit={submitHandler}>
      <h3 className="extraTitle">General Info</h3>
      <div className="new-slide__controls">
        <div className="new-slide__control">
          <label>Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="new-slide__control">
          <label>From</label>
          <input type="text" value={enteredFrom} onChange={fromChangeHandler} />
        </div>
        <div className="new-slide__control">
          <label>Job</label>
          <input type="text" value={enteredJob} onChange={jobChangeHandler} />
        </div>
        <div className="new-slide__control">
          <label>Employer</label>
          <input type="text" value={enteredEmployer} onChange={employerChangeHandler} />
        </div>
        </div>
        <h3 className="extraTitle">Favorite Movies</h3>
        <div className="new-slide__controls">
        <div className="new-slide__control">
          <label>Movie 1</label>
          <input type="text" value={enteredMovie1} onChange={movie1ChangeHandler} />
        </div>
        <div className="new-slide__control">
          <label>Movie 2</label>
          <input type="text" value={enteredMovie2} onChange={movie2ChangeHandler} />
        </div>
        <div className="new-slide__control">
          <label>Movie 3</label>
          <input type="text" value={enteredMovie3} onChange={movie3ChangeHandler} />
        </div>
      </div>
      <div className="new-slide__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default SlideForm;
