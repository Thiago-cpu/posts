import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: 'string',
    password: 'string'
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema)