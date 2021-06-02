import React, { Component } from 'react';
export default class Matrix extends Component {
    constructor(props) {
        super()
        this.state = {color: props.value}
    }
    
    render() {
        return (
          <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changecolor}></div>
        )
    }

    changecolor = () => this.setState({color: "#333"});
}