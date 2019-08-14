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
    login: async args => {
        const { email, password } = args;
        try {
            const user = await User.findOne({ email: email });

            if(!user) {
                throw new Error('Email not registered');
            };

            const isEqual = await bcrypt.compare(password, user.password);

            if(!isEqual) {
                throw new Error('Invalid Password');
            };

            const token = jwt.sign({ userId: user.id, email: user.email }, 'supersecretkey', { expiresIn: '1h' } );

            return {
                userId: user.id,
                token: token,
                tokenExpiration: 1
            };
        } catch(err) {
            throw new Error(err);
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
