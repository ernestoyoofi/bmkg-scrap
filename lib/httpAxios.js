"use strict";
const axios = require("axios")
const cheerio = require("cheerio")
const config = require("./configApi")
const headers = new config()._headers 

class httpAxios {
  constructor() {
    this.axios = axios
    this.cheerio = cheerio
    this.headers = headers
  }
  request(url) {
    return new Promise((yes,no) => {
      axios.get(url, { headers: this.headers }).then(z => {
        yes({
            status: z.status,
            statusText: z.statusText,
            data: z.data
        })
      }).catch(s => {
        yes({
          status: s.response.status,
          statusText: s.response.statusText,
          data: s.response.request.data
        })
      })
    })
  }
  html(url) {
    return new Promise((yes,no) => {
      axios.get(url, { headers: this.headers }).then(z => {
        yes(this.cheerio.load(z.data))
      }).catch(s => {
        yes(this.cheerio.load(s.response.request.data))
      })
    })
  }
}

module.exports = httpAxios;