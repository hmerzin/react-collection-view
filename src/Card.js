import React, {Component} from 'react';

export default class Card extends Component {

  descriptionStyle = {
    height: `${this.props.descriptionHeight}px`, 
    textAlign: 'center', 
    color: this.props.textColor, 
    fontSize: 20,
  }

  render() {
    console.log(this.props.searchTerm);
    if(this.props.description.toLowerCase().includes(this.props.searchTerm.toLowerCase()) || this.props.searchTerm === '' || this.props.searchTerm === undefined) {
      console.log(this.props.searchTerm);
      return (
        <div style={{width: '300px', boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.2)', marginRight: 15, marginBottom: 15, marginTop: 15, marginLeft: 15}}>
          <div style={{height: '200px'}} className='raleway'>{this.props.title}</div>
          <div style={this.descriptionStyle} className='raleway'>
            <div>{this.props.description}</div>
          </div>
        </div>
      );
    }
    return null;
  }
}