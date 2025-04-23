export const setA = (value) => {
  return { 
    type: 'SET_A', 
    payload: value 
  };
};

export const setB = (value) => {
  return { 
    type: 'SET_B', 
    payload: value 
  };
};


export const increase = () => {
  return { 
    type: 'INCREASE' 
  };
};

export const decrease = () => {
  return { 
    type: 'DECREASE' 
  };
};

