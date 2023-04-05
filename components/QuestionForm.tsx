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
      />
      <Select value={tag} onChange={handleTagChange}>
        <MenuItem value="tag1">Tag 1</MenuItem>
        <MenuItem value="tag2">Tag 2</MenuItem>
        <MenuItem value="tag3">Tag 3</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary">
        Ask
      </Button>
    </form>
  );
};

export default QuestionForm;
