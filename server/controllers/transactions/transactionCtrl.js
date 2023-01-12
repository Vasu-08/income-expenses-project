const { appErr } = require("../../utils/appErr");

//create
const Account = require("../../model/Account");
const User = require("../../model/User");
const Transaction = require("../../model/Transaction");
const createTransactionCtrl = async (req, res, next) => {
  const { name, amount, notes, transactionType, account, category } = req.body;
  try {
    const userFound = await User.findById(req.user);
    if (!userFound) return next(appErr("User not found", 404));
    const accountFound = await Account.findById(account);
    if (!userFound) return next(appErr("Account not found", 404));

    const transaction = await Transaction.create({
      name,
      amount,
      notes,
      transactionType,
      account,
      category,
      createdBy: req.user,
    });

    accountFound.transactions.push(transaction._id);

    await accountFound.save();
    res.json({
      status: "success",
      data: transaction,
    });
  } catch (error) {
    next(appErr(error));
  }
};

//all
const getTransactionsCtrl = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({
      status: "success",
      data: transactions,
    });
  } catch (error) {
    next(appErr(error));
  }
};

//single
const getTransactionCtrl = async (req, res,next) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findById(id);
    res.json({
      status: "success",
      data: transaction,
    });
  } catch (error) {
    next(appErr(error));
  }
};

//delete
const deleteTransactionCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndDelete(id);
    res.json({
      status: "success",
      data: transaction,
    });
  } catch (error) {
    return next(appErr(error));
  }
};

//update
const updateTransactionCtrl = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    next(appErr(error));
  }
};

module.exports = {
  createTransactionCtrl,
  getTransactionsCtrl,
  getTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
};
