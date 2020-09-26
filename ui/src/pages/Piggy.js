import React from 'react';

class Piggy extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}
export default Piggy;