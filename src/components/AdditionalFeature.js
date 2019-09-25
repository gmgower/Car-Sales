import React from 'react';

const AdditionalFeature = props => {
console.log("TCL: AdditionalFeatureprops", props)
  
  return (
    <li>
      {/* 15 Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick={() => props.buyFeature(props.feature)}>
      Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
