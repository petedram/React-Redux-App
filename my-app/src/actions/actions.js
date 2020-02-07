import axios from 'axios';

export const ADD_RESTAURANT = 'ADD_RESTAURANT';
export const UPDATE_LIST = 'UPDATE_LIST';
export const SET_ERROR = 'SET_ERROR';

export const addRestaurant = () => dispatch => {
    setTimeout ( () => {
        axios({
            method: 'get',
                url: 'https://developers.zomato.com/api/v2.1/location_details?entity_id=61&entity_type=city',
                headers: {'user-key': 'aaeae4170f024f5a7f7949ad18ba80f9'}
            }) 
        .then(function (response) {

            console.log(response.data.best_rated_restaurant);
            dispatch({type: ADD_RESTAURANT, payload: response.data})
            })
        .catch(function (error) {
            console.log(error);
        });
    }, 2000);
}



