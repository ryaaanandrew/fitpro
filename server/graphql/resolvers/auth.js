const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = {
    users: async () => {
        try {
            const users = User.find();
            return users
        } catch(err) {
            console.log(err)
        }
    },
    createUser: async args => {
        const { email, password, firstName, lastName } = args.userInput;
        try {
            const existingUser = await User.findOne({ email: email });
            if(existingUser) {
                throw new Error('User already exists')
            };

            const hashedPassword = await bcrypt.hash( password, 12);
            const user = new User({
                email: email,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName
            });
            const result = await user.save();
            console.log(result)
            return { ...result._doc, password: null }
        } catch(err) {
            console.log(err);
        }
    }    
};
