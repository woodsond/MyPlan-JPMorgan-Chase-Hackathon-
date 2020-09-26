import React from 'react';

class Articles extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}
export default Articles;