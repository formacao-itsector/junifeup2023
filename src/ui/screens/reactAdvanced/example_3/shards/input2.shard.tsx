import React, { ChangeEvent, useState } from 'react';
import { Box, Input } from '@mantine/core';

export const Input2 = () => {
  const [input2, setInput2] = useState<string>('');
  const handleInput2 = (event: ChangeEvent<HTMLInputElement>) => setInput2(event.currentTarget.value);

  return (
    <>
      <Box>
        <Input placeholder="input #2" value={input2} onChange={handleInput2} />
      </Box>
    </>
  );
};
