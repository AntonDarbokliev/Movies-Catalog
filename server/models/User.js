const { Schema, model, default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username : {
        type : String,
        required : [true,'Username is required'],
        minLength : [3,'Minimum username length is 3 characters']
    },
    email : {
        type : String,
        requried : [true,'Email address is required'],
        validate: {
            validator: function (value) {
              const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
              return emailRegex.test(value);
            },
            message: 'Invalid email address',
          },
    },
    password : {
        type : String,
        required : [true,'Password is required'],
        validate: {
            validator: function (value) {
              return /^[A-Za-z0-9]+$/.test(value);
            },
            message: "Password can only contain english letters and numbers",
          },
        minLength : [3,'Password\'s minimum length is 3 characters']
    }
})


userSchema.virtual('repeatPassword').set(function (value) {
    if (value !== this.password) throw new Error('Passwords don\'t match')
})

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  });


  const User = model('User', userSchema)
  module.exports = User