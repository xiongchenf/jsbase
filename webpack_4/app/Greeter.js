import React from 'react';
import '../assets/css/greeter.css';

export default class Greeter extends React.Component {
    constructor() {
        super();
        this.state = {
            greet: 'Hello world'
        }
    }

    render() {
        return (
        <div className='container'>
            { this.state.greet }
        </div>);
    }
}