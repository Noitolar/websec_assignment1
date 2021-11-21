const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
  fs.createReadStream("index.html").pipe(res)
})

app.get("/buttons.css", (req, res) => {
  fs.createReadStream("buttons.css").pipe(res)
})

app.listen(80)
console.log("express app running at http://10.0.0.2 ~ http://web.cybersecurity.seu.edu")