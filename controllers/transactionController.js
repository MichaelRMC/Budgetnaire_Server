const express = require('express');
const transactions = express.Router();
const transactionArray = require('../models/transaction.js')

transactions.get("/", (req, res) => {
	res.json(transactionArray)
})

transactions.post("/", (req, res) => {
	transactionArray.push(req.body);
	res.status(303).json(transactionArray[transactionArray.length - 1])

})

transactions.get("/:index", (req, res) => {
	const {index} = req.params;
	res.status(200).json(transactionArray[index])
})

transactions.put("/:index", (req, res) => {
	const {index} = req.params;
	transactionArray[index] = res.body
	res.status(200).json(transactionArray[index])
})

transactions.delete("/:index", (req, res) => {
  const { index } = req.params;
  const disputedTransaction = transactionArray.splice(index, 1);
  res.status(200).json(disputedTransaction[0]);
});

module.exports = transactions