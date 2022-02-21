import { useState, useEffect } from 'react';
import Profile from './Profile';
import { reviews } from './reviews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [active, setActive] = useState(0)
  const [next, setNext] = useState(1)
  const [prev, setPrev] = useState(0)
  const [btnClick,setBtnClick] = useState(1)

  const moveNext = () => {
    if (active >= reviews.length - 1) {
      setNext(1)
      setActive(0)
      setPrev(active)
    } else {
      setPrev(active)
      setActive(active + 1)
      setNext(next + 1)
    }
    setBtnClick(1)
  }

  useEffect(() => {
    let inter = setInterval(() => {
      moveNext()
    }, 3000)
      
     return () => {
      clearInterval(inter)
    }
  }, [active,next,prev])

  const nextBtn = () => {
    moveNext()
  }

  const prevBtn = () => {
    if (active <= 0) {
      setNext(1)
      setActive(reviews.length - 1)
      setPrev(active)
    } else {
      setNext(next + 1)
      setPrev(active)
      setActive(active - 1)
    }
    setBtnClick(0)
  }

  return (
    <section className="container">
      <h1 className='header'>
        <span>/</span>
        reviews
      </h1>
      <div className="reviews">
        {
          reviews.map((review) => {
            return <Profile key={review.id} {...review} active={active} next = {next} prev = {prev} click = {btnClick} />
          })
        }
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={prevBtn}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="btn" onClick={nextBtn}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </section>
  );
}

export default App;
