const User = require("../models/User.js");
const createToken = require("../utils/tokenHelper.js");
const bcrypt = require("bcrypt");

async function register(userData) {
  const existingEmail = await User.findOne({ email: userData.email });
  const existingUsername = await User.findOne({ username: userData.username });
  if (existingEmail) {
    throw new Error("A user with this email already exists");
  } else if (existingUsername) {
    throw new Error("A user with this username already exists");
  }
  try {
    const createdUser = await User.create(userData);
    const token = await createToken(createdUser);

    return { token, createdUser };

  } catch (err) {
    throw err
  }
}

async function login(userData) {
  const user = await User.findOne({ email: userData.email });

  if (!user) {
    throw new Error("Wrong email or password");
  }

  const isPasswordCorrect = bcrypt.compare(userData.password, user.password);

  if (!isPasswordCorrect) {
    throw new Error("Wrong email or password");
  }

  try {
    const token = await createToken(user);
  
    return { token, user };
    
  } catch (err) {
    throw err
  }
}

module.exports = {
  register,
  login,
};
