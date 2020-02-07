import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FoodItem from './FoodItem';
import { addRestaurant } from '../actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
//data.best_rated_restaurant[0]
  //array of 10:

  //name: data.best_rated_restaurant[0].restaurant.name
  //cuisines: data.best_rated_restaurant[0].restaurant.cuisines

  //rating: data.best_rated_restaurant[0].restaurant.user_rating.aggregate_rating
  //address: data.best_rated_restaurant[0].restaurant.location.address
  //city: data.best_rated_restaurant[0].restaurant.location.city
  
  //thumb image: data.best_rated_restaurant[0].restaurant.thumb
  //images: data.best_rated_restaurant[0].restaurant.photos returns array of 10:
    //data.best_rated_restaurant[0].restaurant.photos[0].photo.url

    const FoodList = props => {

      const loadCards = e => {

        console.log(props);

        props.restaurants.forEach(item => {
          console.log('item',item);
        });

      }

      useEffect(() => {
        props.addRestaurant();
      }, []);

        return (
          <>
          {props.error ? (
              <div className="error">{props.error}</div>
          ) : (
            <div className="content">
            <Button onClick={loadCards} variant="contained" color="primary">Get Restaurants</Button>
            </div>
          )}
        </>
        );
      };
      
      const mapStateToProps = state => {
        return {
          restaurants: state.restaurants,
          error: state.error
        };
      }

      export default connect(
        mapStateToProps,
        {addRestaurant})(FoodList);