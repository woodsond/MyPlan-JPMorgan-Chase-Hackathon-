import React from 'react';
import Cards from '../Cards';
import './Articles.css';

class Articles extends React.Component{
    render(){
        return(
            <div className='articles-container'>
                <p>{this.props.title}</p>
                <p1>Learn to be finanically literate</p1>
                <Cards />
            </div>
        )
    }
}
export default Articles;
