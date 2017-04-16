import React, {Component} from 'react';
import Card from './Card';

export default class CollectionView extends Component {

  constructor() {
    super();
    this.state = {searchTerm: ''};
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({searchTerm: e.target.value});
  }

  cards = (cards) => {
    return cards.map((card, index) => {
      return <Card searchTerm={this.state.searchTerm} key={index} title={card.titleImage ? <img src={card.titleImage} width='300' height='200' alt='could not be displayed' /> : card.title} descriptionHeight={this.props.descriptionHeight} description={card.description} textColor={this.props.textColor} />
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleSearch} className="searchField" placeholder="SEARCH" />
        <div style={{marginTop: 15}}>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}} >
            {this.cards(this.props.cards)}
          </div>
        </div>
      </div>
    );
  }
}