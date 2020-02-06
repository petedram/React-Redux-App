import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FoodItem from './FoodItem';





  //curl -X GET --header "Accept: application/json" --header "user-key: aaeae4170f024f5a7f7949ad18ba80f9" "https://developers.zomato.com/api/v2.1/location_details?entity_id=61&entity_type=city"


  // axios.get('https://developers.zomato.com/api/v2.1/location_details?entity_id=61&entity_type=city', {
  //   params: {"user-key": "aaeae4170f024f5a7f7949ad18ba80f9","Accept":"application/json"}


    // curl -X GET --header "Accept: application/json" --header "user-key: aaeae417" "https://developers.zomato.com/api/v2.1/location_details?entity_id=61&entity_type=city"

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

    axios({
        method: 'get',
            url: 'https://developers.zomato.com/api/v2.1/location_details?entity_id=61&entity_type=city',
            headers: {'user-key': 'aaeae4170f024f5a7f7949ad18ba80f9'}
        }) 
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });


        return (
          <div className="content">
            <h6>Added features:</h6>
            <FoodItem />
            {/* {props.car.features.length ? (
              <ol type="1">
                {props.car.features.map(item => (
                  <FoodItem key={item.id} feature={item} />
                ))}
              </ol> */}
            ) : (
            )}
          </div>
        );
      };
      
      const mapStateToProps = state => {
        return {
        //   additionalPrice: state.additionalPrice,
        //   car: state.car,
        //   additionalFeatures: state.additionalFeatures
        }
      }

      export default connect(
        mapStateToProps,
        {})(FoodList);