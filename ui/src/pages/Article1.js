import React from 'react';
import Button from 'react-bootstrap/Button';

function SampleArticle() {
    return (
        <div className='samplearticle'>
            <p>Investing During COVID-19</p>
            <p1>Investing during these hard and unkowing times</p1>
            <p2>doesn't seem like an easy task, but thankfully</p2>
            <p3>MyPlanner has a quiz to test your knowledge</p3>
            <p4>and see if you're ready to start!</p4>
            <div style={{marginTop: 15}}>   
                <Button variant="outline-success" onClick={event => window.location.href='/Quiz1'}>Start Quiz</Button>
            </div>
        </div>
    )
}

export default SampleArticle;