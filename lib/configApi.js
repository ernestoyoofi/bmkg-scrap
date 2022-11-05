"use strict";

const daerah = require("./daerah")()
const listkab = daerah?.map(z => (z.kab?.toLowerCase()))
class configApi {
  constructor() {
    this._api  = "https://data.bmkg.go.id",
    this._web  = "https://bmkg.go.id"
    this._lang = "id",
    this._headers = {
      accept: "*/*",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; BMKG-SCRAPPER-NODEJS) Chrome/107.0.0.0 Safari/537.36",
      dnt: 1,
      "cache-control": "no-cache",
      origin: "https://bmkg.go.id"
    }
  }
  headers() {
    this.headers = this._headers
  }
  getByKab(search_kab) {
    let kab = search_kab?.toLowerCase()
    if(listkab.indexOf(kab) != -1) {
      this.kabupaten = daerah[listkab.indexOf(kab)]
      return {
        data: this.kabupaten,
        url: `?kab=${this.kabupaten?.kab}&Prov=${this.kabupaten?.prov}&AreaID=${this.kabupaten?.area_id}`
      }
    } else {
      return {
        data: {},
        url: "?"
      }
    }
  }
}

module.exports = configApi