// Dependencies
// =============================================================
require('dotenv').config();
const router = require("express").Router();
const express = require('express')
const cors = require('cors')
// const path = require('path')
var mysql = require('mysql');
const helmet = require('helmet')
// const addRequestId = require('express-request-id')();


// Sets up the Express App
// =============================================================
 const app = express()
 const PORT = process.env.PORT || 3001


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(addRequestId);
app.use(helmet())
app.use(cors())



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



// app.get('/api/products/:type', (req, res)=> {
//   let type = req.params.type
//   var sql = `SELECT * FROM Product_info WHERE ProductName = ?`
//   connection.query(sql, [type], function (err, result) {
//     if (err) throw err;
//     console.table(result);
//     res.send(result)
//   });
//  })

app.get('/api/products', (req, res) => {
  console.log('hello world')
  var sql = `SELECT Photos_info.image_id, Photos_info.hyperlink, Product_info.ProductName, Price_info.original_price
  FROM Photos_info
  INNER JOIN Product_info
  ON Photos_info.price_id = Product_info.price_id
  INNER JOIN Price_info 
  ON Photos_info.price_id = Price_info.price_id`
  connection.query(sql , function (err, result) {
    if (err) throw err;
    console.table(result);
    res.send(result)
  });
})

app.get('/api/contact', (req, res) => {
  console.log('hello world')
  connection.query("SELECT * FROM Contacts", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

app.get('/api/products/type/:type', (req , res) => {
  const { type } = req.params
  const sql = mysql.format(`SELECT * FROM prods WHERE 1 AND ProductName LIKE ? ` ,[`${type}%`])
  connection.query(sql, (err , data) => {
    if (err) throw err;
    res.send(data)
  })
})




app.listen(PORT, function () {
  console.log(`Server listening on port${PORT}!`)
})