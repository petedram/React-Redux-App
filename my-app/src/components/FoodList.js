import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FoodItem from './FoodItem';
import { addRestaurant } from '../actions/actions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


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

      const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });

      const classes = useStyles();

      function loadCards() {
        console.log('load cards');
        console.log('props from loadCards', props);

        var result = props.restaurants.map(item => (

        <div ClassName='card-style'>
          <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={item.restaurant.thumb}
                      title="NAME"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                      {item.restaurant.name}
                      </Typography>
                      <Rating name="read-only" value={item.restaurant.user_rating.aggregate_rating} readOnly />
                      <Typography variant="subtitle1" color="textSecondary">
                      {item.restaurant.cuisines}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      {item.restaurant.location.address}
                      </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <br />
          </div>

      ))
      return result

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
            {loadCards()}
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