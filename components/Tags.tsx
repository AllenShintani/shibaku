import React from 'react';
import { Chip, Box } from '@mui/material';

interface TagsProps {
  tags: string[];
  onSelectTag: (tag: string) => void;
}

export const Tags: React.FC<TagsProps> = ({ tags, onSelectTag }) => {
  return (
    <Box>
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          onClick={() => onSelectTag(tag)}
          style={{ margin: 4 }}
        />
      ))}
    </Box>
  );
};

export default Tags;
