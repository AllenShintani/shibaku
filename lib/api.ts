import axios from 'axios';

export const fetchQuestions = async () => {
  const response = await axios.get('/api/questions');
  return response.data;
};

export const fetchQuestionsByTag = async (tag: string) => {
  const response = await axios.get(`/api/questions?tag=${tag}`);
  return response.data;
};
