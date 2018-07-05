import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <p> ShowComponent </p>
                <button onClick={()=>this.props.dispatch({type:'INCREMENT'})}>Increment</button>
                <button onClick={()=>this.props.dispatch({type:'DECREMENT'})}>Decrement</button>
            </div>    
        ); 
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ShowComponent);  