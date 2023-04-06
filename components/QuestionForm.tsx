import { useState } from 'react';
import { TextField, Button, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface QuestionFormProps {
  onSubmit: (question: string, tag: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(question, tag);
    setQuestion('');
    setTag('');
  };

  const handleTagChange = (event: SelectChangeEvent) => {
    setTag(event.target.value as string);
  };

  return (
    <form onSubmit={handleSubmit}>
<TextField
  value={question}
  onChange={(e) => setQuestion(e.target.value)}
  label="Your question"
  fullWidth
  margin="normal"
  InputLabelProps={{ shrink: true }}
/>
      <Button type="submit" variant="contained" color="primary">
        レポートを作成する
      </Button>
    </form>
  );
};

export default QuestionForm;
