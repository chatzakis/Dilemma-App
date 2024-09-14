import mongoose from 'mongoose';

// Define schema for answers
const answerSchema = new mongoose.Schema({
  num: Number,
  answer: String,
  count: { type: Number, default: 0 }
});

// Define schema for questions
const questionSchema = new mongoose.Schema({
  question: String,
  answers: [answerSchema]
}, { collection: 'questions' });

const Question = mongoose.model('Question', questionSchema);

export default  Question;
