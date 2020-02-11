import React from 'react';
import './App.css';
import 'typeface-roboto';
import FoodList from './components/FoodList';


import { connect } from 'react-redux';


const App = props => {

  console.log('props from app', props.restaurants);

  return (
    <div className="App">
     <h1>Async Redux</h1>
     <h2>Top restaurants in London from the Zomato API</h2>
       <div className='cards'>
        <FoodList />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(
  mapStateToProps,
  {})(App);