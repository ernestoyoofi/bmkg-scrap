// Import Module
const BMKG = require("./index.js")

// View List Earthquake (15 Length)
BMKG.forecast_weather().then(z => {
  console.log(JSON.stringify(z,null,2))
})