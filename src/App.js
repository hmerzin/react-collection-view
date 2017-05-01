import React, { Component } from 'react';
import './App.css';
import CollectionView from './CollectionView';


class App extends Component {

  getCards = () => {
    /*
      make cards!
    */
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
