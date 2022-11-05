// Export
const BmkgError = require("./lib/bmkgErr")
const { forecast_weather, weather } = require("./lib/weather")
const { earthquake, earthquake_now } = require("./lib/earthquake")
const Bmkg = {
  weather,
  forecast_weather,
  earthquake,
  earthquake_now,
  BmkgError
}

module.exports = Bmkg;