// Dependencies
// =============================================================
const router = require("express").Router();
const express = require('express')
// const cors = require('cors')
// const path = require('path')
var mysql = require('mysql');
const helmet = require('helmet')
// const addRequestId = require('express-request-id')();


// Sets up the Express App
// =============================================================
 const app = express()
 const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(addRequestId);
app.use(helmet())
// app.use(cors())



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

////////////////////////////////////
//  create database connection ////
//////////////////////////////////
var connection = mysql.createConnection({
  host: "localhost",
  // db port
  port: 3306, 
  user: "root",  
  password: "password",
  database:"ecommerce_info"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // connection.query("SELECT * FROM products", function(err, data){
  //   console.table(data)  
  // })  
});

app.get('/', (req, res) => {
  res.send(`we made it!`) 
})

app.get('/api/contact', (req, res) => {
  console.log('hello world')
  connection.query("SELECT * FROM products", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

app.get('/api/products', (req, res) => {
  console.log('hello world')
  var sql = `SELECT Photos.image_id, Photos.hyperlink,
   products.ProductName, Price.original_price FROM Photos INNER JOIN products ON Photos.product_id = products.product_id INNER JOIN Price ON Photos.product_id = Price.product_id`
  connection.query(sql , function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})



// "SELECT Photos.image,Photos.hyperlink,products.ProductName, Price.original_price FROM Photos INNER JOIN products ON Photos.product_id = products.product_id INNER JOIN Price ON Photos.product_id = Price.product_id"



app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`)
})