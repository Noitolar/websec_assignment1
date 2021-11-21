const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
  fs.createReadStream("./index.html").pipe(res)
})

app.get("/api/date", (req, res) => {
  res.send({ date: Date.now() })
})

app.all("/api/datecors", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://web.cybersecurity.seu.edu")
  res.header("Access-Control-Allow-Methods", "GET")
  res.send({ date: Date.now() })
})

app.get("/api/jsonpdate", (req, res) => {
  let jsonp_command = `${req.query.callback}(${JSON.stringify(Date.now())})`
  res.send(jsonp_command)
})

app.listen(80)
console.log(
  "express app running at http://10.0.0.3 ~ http://time.cybersecurity.seu.edu"
)
