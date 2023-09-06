const express = require('express');
const {createTransactionCtrl, getAllTransactionsCtrl, getTransactionCtrl, deleteTransactionCtrl, updateTransactionCtrl} = require('../../controllers/transactions/transactionCtrl');
const isLogin = require('../../middlewares/isLogin');

const transactionsRoute = express.Router();
//POST/api/v1/transactions
transactionsRoute.post('/', isLogin, createTransactionCtrl);

//GET/api/v1/transactions
transactionsRoute.get('/accountTransactions/:id', isLogin, getAllTransactionsCtrl);

//GET/api/v1/transactions/:id
transactionsRoute.get('/:id', isLogin, getTransactionCtrl);

//DELETE/api/v1/transactions/:id
transactionsRoute.delete('/:id', isLogin, deleteTransactionCtrl);

//PUT/api/v1/transactions/:id
transactionsRoute.put('/:id', isLogin, updateTransactionCtrl);

module.exports = transactionsRoute;
