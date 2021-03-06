const User = require("../model/User");

const bcrypt = require("bcryptjs");

const getErrorMessage = require("../authHelpers/dbErrorHelper");
const {
  comparePassword,
  createJwtToken,
} = require("../authHelpers/jwtGenerators");

module.exports = {
  login: async (req, res) => {
    try {
      let foundUser = await User.findOne({ username: req.body.username }).select(
        "-v"
      );
      if (foundUser === null) {
        throw Error("User not found,please sign up");
      }

      let comparedPassword = await comparePassword(
        req.body.password,
        foundUser.password
      );

      if (comparedPassword === 409) {
        throw Error("Check credentials");
      }

      let jwtTokenObj = await createJwtToken(foundUser);

      res.cookie("jwt-cookie-expense", jwtTokenObj.jwtToken, {
        expires: new Date(Date.now() + "1h"),
        httpOnly: false,
        secure: process.env.NODE_ENV === "production" ? true : false,
      });
      res.cookie("jwt-cookie-refresh-expense", jwtTokenObj.refreshToken, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: false,
        secure: process.env.NODE_ENV === "production" ? true : false,
      });
      foundUser = foundUser.toObject();
      delete foundUser.password;
      res.send(foundUser);
    } catch (e) {
      res.status(518).json({
        message: getErrorMessage(e),
      });
    }
  },
  logout: (req, res) => {
    res.clearCookie("jwt-cookie-expense");
    res.clearCookie("jwt-cookie-refresh-expense");
    res.end();
  },

  createUser: async (req, res) => {
    try {
      let createdUser = await new User();

      createdUser.password = req.body.password;
      createdUser.username = req.body.username;

      console.log(createdUser);

      let genSalt = await bcrypt.genSalt(12);
      let hashedPassword = await bcrypt.hash(createdUser.password, genSalt);

      createdUser.password = hashedPassword;
      // console.log("-----",createdUser);

      await createdUser.save();

      res.json({
        message: "user created",
      });
    } catch (e) {
      console.log(e);
      res.status(518).json({
        message: getErrorMessage(e),
      });
    }
  },

  updateUser: async (req, res) => {
    console.log(req.body);

    try {
      const userID = req.params.id;
      let updatedUser = await User.findByIdAndUpdate(
        {
          _id: userID,
        },
        {wins:wins++}
      );
      res.json(updatedUser);
    } catch (e) {
      res.status(500).json(getErrorMessage(e));
    }
    
  },


};
