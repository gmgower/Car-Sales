import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// 8 import connect from react-redux
import {connect} from 'react-redux';

const App = (props) => {
const {state} = props
  


  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.state.store} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

// 10 Define mapSTP
const mapStateToProps = state =>{
console.log("TCL: state", state)
return {
  state
}
  
}

// 9 wrap App component with connect inside second call from 1st call. Pass mapSTP and empty obj 
export default connect(mapStateToProps, {})(App);
