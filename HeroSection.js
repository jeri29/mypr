import React, { useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
//import { Link } from 'react-router-dom';
//import DatePicker from 'react-date-picker'

function HeroSection() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  //const [value, onChange] = useState(new Date());
  return (
    <div className='hero-container'>
      
      <h1>NEVER STOP EXPLORING</h1> 
      <p>CHOOSE YOUR DESTINY</p>
      <div>
      <form  class="flex-form">
      <label for="from">
        <i class="ion-location"></i>
      </label>
      <input type="search" placeholder="Where do you want to go?"/>
      <input type="submit" value="Search"/>
    </form>
      </div>
     
      
      {/*<DatePicker
      className="date"
        onChange={onChange}
        value={value}
      />

     } <label for="start">Start date:</label>

      <input type="date" id="start" name="trip-start"
       value="2021-08-20"
       min="2018-01-01" max="2050-12-31"/>
  */}
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         onClick={handleClick}>
         BOOK NOW 
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         TOURISM VLOGS <i className='far fa-play-circle' />
        </Button>
        
      </div>
    
  </div>
  );
}

export default HeroSection;
/*
import Calendar from 'react-calendar';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
    
    <div class='social-icons'>
    <Link
      class='social-icon-link facebook'
      to='/'
      target='_blank'
      aria-label='Facebook'
    >
      <i class='fab fa-facebook-f' />
    </Link>
    <Link
      class='social-icon-link instagram'
      to='/'
      target='_blank'
      aria-label='Instagram'
    >
      <i class='fab fa-instagram' />
    </Link>
    <Link
      class='social-icon-link youtube'
      to='/'
      target='_blank'
      aria-label='Youtube'
    >
      <i class='fab fa-youtube' />
    </Link>
    <Link
      class='social-icon-link twitter'
      to='/'
      target='_blank'
      aria-label='Twitter'
    >
      <i class='fab fa-twitter' />
    </Link>
    
    </div>
*/