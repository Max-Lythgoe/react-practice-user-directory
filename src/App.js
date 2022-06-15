import React, {useState} from 'react';
import './App.css';
import Slide from './components/slide'
import slideInfo from './data'
import NewSlide from './components/NewSlide'

function App() {
  const [info, setSlides] = useState(slideInfo);

  const addSlideHandler = (slide) => {
    setSlides((prevSlides) => {
      return [...prevSlides, slide];
    });
  };

  return (
      <div className="App">
        <header>
          <h1 className="home">Home</h1>
          </header>
        <Slide items={info} />
        <NewSlide onAddSlide={addSlideHandler} items={info} />
      <footer></footer>
      </div>
    );
}

export default App;
