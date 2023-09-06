const {appErr} = require('../../utils/appErr');
const Account = require('../../model/Account');
const User = require('../../model/User');
const Transaction = require('../../model/Transaction');

const createTransactionCtrl = async (req, res, next) => {
  const {name, amount, notes, transactionType, account, category} = req.body;
  try {
    const userFound = await User.findById(req.user);
    const accountFound = await Account.findById(account);

    if (!userFound) {
      return next(appErr('User not found', 404));
    }

    if (!accountFound) {
      return next(appErr('Account not found', 404));
    }

    const transaction = await Transaction.create({
      name,
      amount,
      notes,
      transactionType,
      account,
      category,
      createdBy: req.user
    });

    accountFound.transactions.push(transaction._id);
    await accountFound.save();

    res.json({
      status: 'success',
      data: transaction
    });
  } catch (error) {
    next(appErr(error));
  }
};

//all transactions for the particular account of user
const getAllTransactionsCtrl = async (req, res, next) => {
  try {
    const {id} = req.params;
    const account = await Account.findById(id).populate('transactions');

    res.json({
      status: 'success',
      data: account.transactions
    });

  } catch (error) {
    next(appErr(error));
  }
};

//single
const getTransactionCtrl = async (req, res, next) => {
  try {
    const {id} = req.params;
    const transaction = await Transaction.findById(id);

    res.json({
      status: 'success',
      data: transaction
    });
  } catch (error) {
    next(appErr(error));
  }
};

//delete
const deleteTransactionCtrl = async (req, res) => {
  try {
    const {id} = req.params;
    const transaction = await Transaction.findByIdAndDelete(id);
    res.json({
      status: 'success',
      data: transaction
    });
  } catch (error) {
    next(appErr(error));
  }
};

//update
const updateTransactionCtrl = async (req, res) => {
  try {
    const {id} = req.params;

    const transaction = await Transaction.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    res.json({
      status: 'success',
      data: transaction
    });
  } catch (error) {
    next(appErr(error));
  }
};

module.exports = {
  createTransactionCtrl,
  getAllTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl
};
