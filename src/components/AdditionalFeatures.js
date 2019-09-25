import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log("AdditionalFeatures", props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {/* 14 pass buyFeature */}
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyFeature={props.buyFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
