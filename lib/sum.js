const sum = values => {
  const result = values.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  return result;
};

module.exports = sum;
