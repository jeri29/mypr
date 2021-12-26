import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHOOSE COUNTRY TO EXPLORE </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/India.jpg'
              text='INDIA'
              //label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Maldives.jpg'
              text='MALDIVES'
              //label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/63.cms'
              text='INDONESIA'
              //label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/dubail.jpg'
              text='DUBAI'
              //label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/aus.webp'
              text='AUSTRALIA'
              //label='Adrenaline'
              path='/sign-up'
            />
             <CardItem
              src='images/Switzjpg.jpg'
              text='SWITZERLAND'
              //label='Adventure'
              path='/services'
            />
             <CardItem
              src='images/ANDAMAN.jpg'
              text='NICOBAR'
              //label='Adventure'
              path='/services'
            />
             <CardItem
              src='images/bangkok.jpg'
              text='BANGKOK'
              //label='Adventure'
              path='/services'
            />
             <CardItem
              src='images/rome.jpeg'
              text='ROME'
              //label='Adventure'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
