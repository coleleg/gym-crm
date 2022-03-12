const { AuthenticationError } = require("apollo-server-express");
const Member = require("../models/Member");
const User = require("../models/User");

const resolvers = {
    Query: {
        user: async (_, { email }) => {
            return User.findOne({ email })
        },
        users: async () => {
            return User.find()
        },
        member: async (_, { email }) => {
            return Member.findOne({ email })
        },
        members: async () => {
            return Member.find()
        },
    },


    Mutation: {
        addUser: async (_, args) => {
            const user = await User.create(args);

            return user;
            console.log(`User was added`);
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials Provided')
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials Provided')
            }
            return user;
        },
        addMember: async (_, args) => {
            const member = await Member.create(args);

            return member;
            console.log('Member was added')
        },
        updateMember: async (_, { firstName, lastName, email, age, zip, phoneNumber }) => {
            const updatedMember = await Member.findOneAndUpdate({ email: email }, req.body, { new: true }, function (err, user) {
                if (err) {
                    res.send(err)
                }
                return updatedMember;
                console.log(`Member was updated`)
            })
        }
    }
};

module.exports = resolvers;