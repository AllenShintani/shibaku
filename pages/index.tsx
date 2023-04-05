import React, { useState, useEffect } from 'react';
import QuestionForm from '../components/QuestionForm';
import Tags from '../components/Tags';
import { submitQuestion, fetchQuestions,fetchQuestionsByTag } from '../lib/api';

const tags = ['JavaScript', 'React', 'TypeScript', 'Next.js', 'MUI'];



const Home: React.FC = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
    };

    fetch();
  }, []);

  const handleQuestionSubmit = async (question: string, tag: string) => {
    const data = await submitQuestion(question, tag);
    setQuestions([...questions, data]);
  };

  const handleTagSelect = async (tag: string) => {
    const data = await fetchQuestionsByTag(tag);
    setQuestions(data);
  };

  return (
    <div>
      <h1>疑問解決アプリ</h1>
      <Tags tags={tags} onSelectTag={handleTagSelect} />
      <QuestionForm onSubmit={handleQuestionSubmit} />
      <div>
        {questions.map((question) => (
          <p key={question.id}>{question.content}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
