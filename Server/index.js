import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from './models/question.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));


// GET endpoint to fetch 10 random questions
app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);  // Get 10 random questions
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

// GET endpoint to fetch :num random questions
app.get('/questions/:num', async (req, res) => {
  const { num } = req.params;

  try {
    const questions = await Question.aggregate([{ $sample: { size: parseInt(num) } }]);  // Get 10 random questions
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

// POST endpoint to add question
app.post('/question', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ message: 'Error saving question' });
  }
});

// PATCH endpoint to update answer count for statistics
app.patch('/questions/:questionId/answer/:answerNum', async (req, res) => {
  const { questionId, answerNum } = req.params;

  try {
    await Question.updateOne(
      { _id: questionId, "answers.num": parseInt(answerNum) },
      { $inc: { "answers.$.count": 1 } }
    );
    res.status(200).json({ message: 'Answer count updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating answer count' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
