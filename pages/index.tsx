import React, { useState, useEffect } from 'react';
import QuestionForm from '../components/QuestionForm';
import Tags from '../components/Tags';
import {  fetchQuestions,fetchQuestionsByTag } from '../lib/api';

const tags = ['法律', '自然', '日本文学', '科学', '政治', '経済', '歴史', '芸術', '哲学', '言語', '地理', '文化', '社会', '生物', '医学', '心理学', '教育', 'スポーツ', '食', '音楽', '映画', 'テレビ', 'コンピュータ', 'ゲーム', 'インターネット', '電気通信', '軍事', '宇宙', '天文', '地球科学', '地質学', '化学', '物理学', '数学', '統計学', '工学', '建築', '農学', '獣医学', '動物', '植物', '植物', '天然環境', '地球環境'];

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
    //タグとユーザー情報を質問に付与する処理
    //質問を英語にするためのAPIに投げる処理
    //質問をChatGPTに投げる処理
    //console.log(1)
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
    </div>
  );
};

export default Home;
