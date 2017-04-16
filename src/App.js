import React, { Component } from 'react';
import './App.css';
import CollectionView from './CollectionView';
import * as items from './samples';

class App extends Component {

  getCards = () => {
    //const im = require(items[0].titleImage);
    //return <img src={im} />
    console.log(items.cards);
    return items.cards.map(item => {
      return ({titleImage: require(item.titleImage), description: item.styleNum});
    });
  } 

  render() {
    console.log(this.getCards());
    return (
      <CollectionView cards={this.getCards()} descriptionHeight={25} textColor='#FF8F00' />
      //<CollectionView cards={[{titleImage: '', description: 'asdf'}]} descriptionHeight={25} textColor='#FF8F00' />
    );
  }
}

export default App;
