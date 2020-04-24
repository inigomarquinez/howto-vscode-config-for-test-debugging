const subtraction = values => {
  const result = values.reduce((previousValue, currentValue, currentIndex) => {
    return currentIndex === 0 ? currentValue : previousValue - currentValue;
  }, 0);

  return result;
};

module.exports =  subtraction;
