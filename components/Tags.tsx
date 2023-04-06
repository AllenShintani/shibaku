import React, { useState } from 'react';
import { Box, Chip } from '@mui/material';

interface TagsProps {
  tags: string[];
  onSelectTag: (tag: string) => void;
}

const Tags: React.FC<TagsProps> = ({ tags, onSelectTag }) => {
  const [selectedTag, setSelectedTag] = useState('');

  const handleClick = (tag: string) => {
    setSelectedTag(tag);
    onSelectTag(tag);
  };

  return (
    <Box>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          onClick={() => handleClick(tag)}
          style={
            tag === selectedTag
              ? { backgroundColor: 'blue', color: 'white', marginRight: '5px', marginBottom: '5px' }
              : { marginRight: '5px', marginBottom: '5px' }
          }
        />
      ))}
    </Box>
  );
};

export default Tags;
