"use strict";
const bmkgErr = require("./bmkgErr")
const httpAxios = require("./httpAxios")

async function weather() {
  return new Promise((ya,td) => {
    new httpAxios().html("https://bmkg.go.id/").then(z => {
      let data = []
      z("body .owl-prakicu-kota .prakicu-kota").each((i, el) => {
        data.push({
          kota: z("h2.kota", el).eq(0).text(),
          waktu: z("p", el).eq(0).text(),
          cuaca: z("p", el).eq(1).text(),
          suhu: z("h2", el).eq(1).text(),
          icon: `https://bmkg.go.id/${z("img", el).eq(0).attr("src")}`
        })
      })
      ya(data)
    }) 
  })
}
async function forecast_weather() {
  return new Promise((ya, td) => {
    new httpAxios().html("https://bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg").then(z => {
      let data = {
        tanggal: [],
        row_1: [],
        row_2: [],
        row_3: []
      }
      z(".container.content ul.nav-tabs li").each((i, el) => {
        data.tanggal.push(z(el).text())
      })
      z("div.tab-content #TabPaneCuaca1 table.table").each((i, el) => {
      //   data[names].push(z(el).html())
        z("tbody tr", el).each((i, el) => {
          let dpst = []
          z("td", el).each((i, el) => {
            dpst.push(z(el).text())
          })
          data["row_1"].push(dpst)
        })
      })
      z("div.tab-content #TabPaneCuaca2 table.table").each((i, el) => {
      //   data[names].push(z(el).html())
        z("tbody tr", el).each((i, el) => {
          let dpst = []
          z("td", el).each((i, el) => {
            dpst.push(z(el).text())
          })
          data["row_2"].push(dpst)
        })
      })
      z("div.tab-content #TabPaneCuaca3 table.table").each((i, el) => {
      //   data[names].push(z(el).html())
        z("tbody tr", el).each((i, el) => {
          let dpst = []
          z("td", el).each((i, el) => {
            dpst.push(z(el).text())
          })
          data["row_3"].push(dpst)
        })
      })
      data["row_1"] = Rowes_wed(data["row_1"])
      data["row_2"] = Rowes_wed(data["row_2"])
      data["row_3"] = Rowes_wed(data["row_3"])
      ya(data)
    })
    // const BMKG = require("./index")
    // console.log(BMKG)
    function Rowes_wed(rows) {
      let getLn = rows[0]?.length
      let data = []
      if(getLn === 4) {
        for(let z of rows) {
          let [ lokasi, cuaca, suhu, kelembapan] = z
          data.push({
            lokasi,
            cuaca: [cuaca],
            suhu,
            kelembapan
          })
        }
      }
      if(getLn === 5) {
        for(let z of rows) {
          let [ lokasi, cuaca, cuaca_2, suhu, kelembapan] = z
          data.push({
            lokasi,
            cuaca: [cuaca, cuaca_2],
            suhu,
            kelembapan
          })
        }
      }
      if(getLn === 6) {
        for(let z of rows) {
          let [ lokasi, cuaca, cuaca_2, cuaca_3, suhu, kelembapan] = z
          data.push({
            lokasi,
            cuaca: [cuaca, cuaca_2, cuaca_3],
            suhu,
            kelembapan
          })
        }
      }
      if(getLn === 7) {
        for(let z of rows) {
          let [ lokasi, cuaca, cuaca_2, cuaca_3, cuaca_4, suhu, kelembapan] = z
          data.push({
            lokasi,
            cuaca: [cuaca, cuaca_2, cuaca_3, cuaca_4],
            suhu,
            kelembapan
          })
        }
      }
      return data
    }
  })
}
module.exports = {
  weather,
  forecast_weather
}