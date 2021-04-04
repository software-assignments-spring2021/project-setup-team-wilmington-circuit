import React, { Component } from 'react';
import './MenuDropdown.css'

export default class MenuDropdown extends Component {
    constructor(props) {
        super(props);
        this.props = {
          title: ''    
        };
    }

    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {

      
            const dummy_data = [
            { id: 1, name: "item 1" },
            { id: 2, name: "item 2" },
            { id: 3, name: "item 3" },
            ];
        
        return (
            <div>
                <li><a onClick={this.toggle}>{this.props.title} +</a></li>
                {this.state.on && (
                    <div>
                        <ul>
                        {dummy_data.map((item) => (
                            <li className="item">{item.name}</li>
                        ))}
                        </ul>
                    </div>
            )}
            </div>
        )
    } 
}