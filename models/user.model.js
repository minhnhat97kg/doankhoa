const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const SALT_WORK_FACTOR = 10;
const schema = mongoose.Schema({
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 4
    },
    createAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
})

schema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

schema.methods.comparePassword = async function(candidatePassword) {
    const user = this;
    const compare = await bcrypt.compare(candidatePassword, user.password);
    return compare;
};

module.exports = mongoose.model('User', schema);
