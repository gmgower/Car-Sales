// 11 actions creators 
export const BUY_FEATURE = "BUY_FEATURE";
export const buyFeature = feature => {
       return{type: "BUY_FEATURE", payload: feature} // feature: []
}

// 16
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = feature => {
    return {type: "REMOVE_FEATURE", payload: feature}
}