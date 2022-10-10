var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    age: Number,
    isAdmin: Boolean,
    createdAt: Date,

}, {
    timestamps: true
})

var userSchema = new Schema({
    name: {type: String, lowercase: true}
});s