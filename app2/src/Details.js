import { render } from '@testing-library/react';
import { Component } from 'react';
import './details.css';

export default class Details extends Component {
    state={
        div1: "Rohan",
        div2: this.props.div2,
        div3: "India"
    }
    
    render(){
    return (
        <div className="parent">
            <div className="innerDiv"><h1>Name: {this.state.div1}</h1></div>
            <div className="innerDiv"><h1>Name: {this.state.div2}</h1></div>
            <div className="innerDiv"><h1>Country: {this.state.div3}</h1></div>

        </div>


    );
    }
}