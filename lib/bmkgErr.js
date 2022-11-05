"use strict";

class isBmkgError extends Error {
  constructor(name, code=null, codeText=null) {
    super(name)
    this.name = this.constructor.name;

    this.code = code;
    this.message = codeText;
    this.details = {
      message: name,
      responseMsg: codeText,
      responseCode: code
    };
    this.time = new Date()
    this.version = require("../package.json").version
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = isBmkgError