import React from 'react';

import AddedFeature from './AddedFeature';


const AddedFeatures = props => {
console.log("TCL: AddedFeatures props", props)
  // 20 
  const { removeFeature} = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {/* 20 add removeFeature */}
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
