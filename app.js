const express = require('express')
const cors = require('cors')
const transactions = require('./controllers/transactionController.js')

const app = express();

app.use(cors());                        
app.use(express.json())
app.use("/transactions", transactions )



app.get("/", (req, res) => {
	res.send("Welcome To Budgetnaire!");
});

app.get("*", (req, res) => {
	res.json("Page Not Found")
})


module.exports = app
