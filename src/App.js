import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


// 8 import connect from react-redux
import { connect } from 'react-redux';

// 12 import buyFeature fron actions
// 17 import removeFeature
import {buyFeature, removeFeature} from './actions' 

const App = props => {
console.log("TCL: props", props)
  
  const { state, buyFeature, removeFeature} = props;

  // const removeFeature = item => {
    // dispatch an action here to remove an item
  // };


  const buyItem = (item, price) => {
    // dipsatch an action here to add an item
   
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header car={props.state.car} />
        {/* 19 removeFeature  */}
        <AddedFeatures car={props.state.car} removeFeature={removeFeature} />
      </div>
      <div className='box'>
        {/* 13 pass buyFeature */}
        <AdditionalFeatures store={props.state.store} buyFeature={buyFeature} />
        <Total
          car={props.state.car}
          additionalPrice={props.state.additionalPrice}
        />
      </div>
    </div>
  );
};

// 10 Define mapSTP
const mapStateToProps = state => {
  console.log('TCL: state', state);
  return {
    state
  };
};

// 9 wrap App component with connect inside second call from 1st call. Pass mapSTP and empty obj
// 13 pass buyFeature into obj
// 18 pass removeFeature into obj
export default connect(
  mapStateToProps,
  {buyFeature, removeFeature}
)(App);
