"use strict";
const bmkgErr = require("./bmkgErr")
const httpAxios = require("./httpAxios")

async function earthquake() {
  return new Promise((ya,td) => {
    new httpAxios().request("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json").then(z => {
      ya(z.data.Infogempa.gempa)
    })
  })
}
async function earthquake_now() {
  return new Promise((ya,td) => {
    new httpAxios().request("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json").then(z => {
      ya(z.data.Infogempa.gempa)
    })
  })
}

module.exports = {
  earthquake,
  earthquake_now
}