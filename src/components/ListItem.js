import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return(
            <li 
                className="listItem" 
                onClick={() => this.props.handleListItemClick(this.props)}
            >
                <img 
                    src={
                        this.props.categories[0].icon.prefix+
                        "32" +
                        this.props.categories[0].icon.suffix
                    } 
                    alt={this.props.categories[0].name} 
                />
                {this.props.name}
            </li>
        );    
    }
}

// Although it ended up looking so nice it looks to professional
// I can probably remove the src part above
// Forrest's Walkthrough video #6 16:10
