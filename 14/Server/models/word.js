import mongoose from 'mongoose';

const { Schema, Types } = mongoose;


const WordSchema = new Schema({
  picture: String,
  eng: String,
  vie: String,
  category: String,
  favorite: { type: Number, default: 0 },
  remind: { type: Number, default: 0 },
  pronounce: String,
  type: String,
  example: String
});

WordSchema.statics = {
  createNew(word) {
    return this.create(word);
  },
  getAll(){
    return this.find().exec();
  }
}

export default mongoose.model('words', WordSchema);