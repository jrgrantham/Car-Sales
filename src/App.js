import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

const BUY_ITEM = 'BUY_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM'

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...state, 
        car: {...state.car, 
          price: state.car.price + action.payload.price,
          features: [...state.car.features, action.payload]
        },
        store: state.store.filter(item => {
          item.id !== action.payload.id
        })
      };
    case REMOVE_ITEM:
      return {
        
      }
    default:
      return state;
  }
}

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatchEvent({
      type: REMOVE_ITEM,
      payload: { item }
    })
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatchEvent({
      type: BUY_ITEM,
      payload: { item }
    })
  };



  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
