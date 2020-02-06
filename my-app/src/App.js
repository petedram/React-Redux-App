import React from 'react';
import './App.css';
import 'typeface-roboto';
import FoodList from './components/FoodList';

import { connect } from 'react-redux';


function App() {


  return (
    <div className="App">
     <h1>Async Redux</h1>
     <FoodList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // additionalPrice: state.additionalPrice,
    // car: state.car,
    // additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {})(App);