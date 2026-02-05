import axios from 'axios';

export const fetchQuestions = async () => {
  // Ambil 10 soal, multiple choice
  const endpoint = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
  const data = await axios.get(endpoint);
  
  return data.data.results.map((question) => ({
    ...question,
    // Acak posisi jawaban
    answers: [...question.incorrect_answers, question.correct_answer]
      .sort(() => Math.random() - 0.5)
  }));
};