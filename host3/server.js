const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
  fs.createReadStream("./index.html").pipe(res)
})

app.listen(80)
console.log("express app running at http://10.0.0.4 ~ http://jsonp.cybersecurity.seu.edu")
