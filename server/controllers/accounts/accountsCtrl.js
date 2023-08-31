const Account = require('../../model/Account');
const User = require('../../model/User');
const {appErr} = require('../../utils/appErr');

const createAccountCtrl = async (req, res, next) => {
  const {name, intitialBalance, accountType, notes} = req.body;
  try {
    const userFound = await User.findById(req.user);
    if (!userFound) return next(appErr('User not found', 404));

    const account = await Account.create({
      name,
      intitialBalance,
      accountType,
      notes,
      createdBy: req.user
    });
    userFound.accounts.push(account._id);
    await userFound.save();
    res.json({
      status: 'success',
      data: account
    });
  } catch (error) {
    next(appErr(error.message, 500));
  }
};

//all
const getAccountsCtrl = async (req, res, next) => {
  try {
    const accounts = await Account.find().populate('transactions');

    res.json({
      status: 'success',
      data: accounts
    });
  } catch (error) {
    res.json(error);
  }
};

//single
const getAccountCtrl = async (req, res) => {
  try {
    const {id} = req.params;
    const account = await Account.findById(id).populate('transactions');

    res.json({
      status: 'success',
      data: account
    });
  } catch (error) {
    next(appErr(error));
  }
};

//delete
const deleteAccountCtrl = async (req, res, next) => {
  try {
    const {id} = req.params;
    const account = await Account.findByIdAndDelete(id);
    res.json({status: 'success', data: account});
  } catch (error) {
    res.json(error);
  }
};

//update
const updateAccountCtrl = async (req, res, next) => {
  try {
    const {id} = req.params;
    const account = await Account.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    res.json({status: 'Route updated successfully', data: account});
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createAccountCtrl,
  getAccountCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
  getAccountsCtrl
};
