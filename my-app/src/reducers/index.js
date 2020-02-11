

export const initialState = {
    restaurants: []
  };


export const foodReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_RESTAURANT':
        console.log('ADD_RESTAURANT type and payload', action.type, action.payload);
        console.log('logging features from reducer', state)
        return {
          ...state,
          restaurants: action.payload.best_rated_restaurant

          // restaurants: [...state.restaurants, action.payload]
          
        }
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload
        };

      default:
        return state;
    }
  }

  