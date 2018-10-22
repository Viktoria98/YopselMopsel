import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {productList} from './productlist.js';
import {catList} from './catlist.js';


function isSearched(searchTerm) {
  return function(item) {
    return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) == 0;
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      productList,
      catList,
      searchTerm: '',
      showForm: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchBlur = this.onSearchBlur.bind(this);
}

onSearchChange(event) {
  this.setState({ searchTerm: event.target.value });
  this.setState({ showForm: true});
 
}

onSearchBlur() {
  this.setState({showForm: false});
}

  render() {
    const { searchTerm, productList, catList, showForm } = this.state;
    const showHide = {
      'display': this.state.showForm ? 'block' : 'none'
    };
    return (
      <div className="App">
        <img className="backArrow" src="img/left-arrow.png"></img>
        <input 
          type="text" 
          placeholder="Что Вы хотите найти?"
          onChange={this.onSearchChange}
          // onBlur = {this.onSearchBlur}
          >
        </input>
        <img className="searchImg" src="img/loupe_icon.png"></img>

        {productList.filter(isSearched(this.state.searchTerm)).map(item =>
          <div style={showHide} key={item.objectID} className="searchResult">
              <div className="searchResult-item row">
                <div className="col-md-1 col-sm-0 col-0">
                  <img className="resultImg" src={item.image}></img>
                </div>
                <div className="col-md-6 col-sm-7 col-7">
                  <span className="name">
                    <a href="">{item.name}</a>
                  </span>
                </div>
                <div className="name co-md-5 col-sm-5 col-5">
                  <span className="price">{item.price}</span>
                  <img className="inStockImg" src={item.inStockImg}></img>
                  <span className="inStock">{item.inStock}</span>
                </div>
              </div>
            </div>
        )}


          {catList.filter(isSearched(this.state.searchTerm)).map(item => 
            <div style={showHide} key={item.objectID} className="searchResult">
              <div className="searchResult-item row">
                <div className="catName col-11">
                  <span>
                    <a href="">{item.name}</a>
                  </span>
                </div>
                <div className="catArrow col-1">
                  <img className="" src="img/arrow.png"></img>
                </div>
              </div>
            </div>
          )}

          <div style={showHide} className="searchResult">
            <div className="allResults">
              <span><a href="#">Все результаты ></a></span>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
