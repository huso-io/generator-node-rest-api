import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ObjectId = Schema.ObjectId;

exports = module.exports = Schema({
  author: ObjectId,
  title: String
});
