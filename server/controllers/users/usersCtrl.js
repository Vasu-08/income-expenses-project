const bcrypt = require('bcryptjs');
// const verify = require("jsonwebtoken");

const User = require('../../model/User');
const {appErr} = require('../../utils/appErr');
const generateToken = require('../../utils/generateToken');
//Register
const registerUserCtrl = async (req, res, next) => {
  const {fullname, password, email} = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({email});
    if (userFound) return next(appErr('Email already exist', 400));

    //check if fields are empty
    // if (!email || !password || !fullname) {
    //   return next(appErr("Please fill all fields", 400));
    // }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword
    });

    res.json({
      status: 'success',
      fullname: user.fullname,
      email: user.email,
      id: user._id
    });
  } catch (error) {
    return next(appErr(error.message, 500));
  }
};

//login
const userLoginCtrl = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    const userFound = await User.findOne({email});
    if (!userFound) return next(appErr('Invalid credentials', 400));

    const passwordMatch = await bcrypt.compare(password, userFound.password);

    if (!passwordMatch) return next(appErr('Invalid credentials', 400));

    res.json({
      status: 'success',
      id: userFound._id,
      user: userFound,
      token: generateToken(userFound._id)
    });
  } catch (error) {
    return next(appErr(error.message, 500));
  }
};

//profile
const userProfileCtrl = async (req, res, next) => {
  try {
    const user = await User.findById(req.user).populate({
      path: 'accounts',
      populate: {
        path: 'transactions',
        model: 'Transaction'
      }
    });
    res.json({
      status: 'success',
      data: user
    });
  } catch (error) {
    return next(appErr(error.message, 500));
  }
};

//delete
const deleteUserCtrl = async (req, res, next) => {
  try {
    const userFound = await User.findByIdAndDelete(req.user);
    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    return next(appErr(error.message, 500));
  }
};

//update
const updateUserCtrl = async (req, res, next) => {
  try {
    if (req.body.email) {
      const userFound = await User.findOne({email: req.body.email});
      if (userFound) return nextErr('Email already exists', 400);
    }

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = await User.findByIdAndUpdate(
        req.user,
        {
          password: hashedPassword
        },
        {
          new: true
        }
      );
      return res.status(200).json({status: 'Password Updated Successfully'});
    }
    const user = await User.findByIdAndUpdate(req.user, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({status: 'success', data: user});
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl
};
