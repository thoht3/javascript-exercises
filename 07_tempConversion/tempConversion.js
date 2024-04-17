const convertToCelsius = function(fahren) {
  return Math.round((fahren - 32) / 9 * 5 * 10) / 10;
};

const convertToFahrenheit = function(celsi) {
  return Math.round((celsi * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
