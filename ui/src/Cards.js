import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Read these featured tips and articles to help you on your financial journey!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='/images/iu.gif'
                        text='Investing during COVID-19'
                        label='Investments'
                        path='/'
                        />
                        <CardItem 
                        src='images/iu.gif'
                        text='Knowing how much to save and why'
                        label='Savings'
                        path='/piggyBank'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/iu.gif'
                        text='Building Credit 101'
                        label='Credit'
                        path='/'
                        />
                        <CardItem 
                        src='images/iu.gif'
                        text='The first steps to managing a budget'
                        label='Budgeting'
                        path='/'
                        />
                        <CardItem 
                        src='images/iu.gif'
                        text='Choosing the right savings account for you'
                        label='Savings'
                        path='/piggyBank'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards