const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

const newMemberSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Must match an email address!"],
    },
    age: {
        type: Number,
        max: 100,
        required: false
    },
    zip: {
        type: Number,
        required: false,
    },
    phoneNumber: {
        type: String,
        unique: true,
        match: [/^\d{10}$/, "Must match a phone number!"],
    },
<<<<<<< HEAD
    user_email: {
        type: String,
        required: true
    }

=======
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
>>>>>>> 52df64c09c43cc1cfb45e5324386f4e3538851fe
});

const Member = model('Member', newMemberSchema);

module.exports = Member;