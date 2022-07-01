import React from 'react';
import './cards.css';
import AMZN from '../images/AMZN.svg';
import FB from '../images/FB.png';
import GOOGL from '../images/GOOGL.png';
function Cards(){
    return(
        <div className='cards'>
            <div className='card'>
                <p><strong>AMZN</strong></p>
                <h1>108.68 USD</h1>
                <img src={AMZN} alt='amazon'/>
            </div>
            <div className='card'>
                <p><strong>FB</strong></p>
                <h1>157.05 USD</h1>
                <img src={FB} alt='amazon'/>
            </div>
            <div className='card'>
                <p><strong>GOOGL</strong></p>
                <h1>2230.88 USD</h1>
                <img src={GOOGL} alt='amazon'/>
            </div>
        </div>
    )
}
export default Cards;