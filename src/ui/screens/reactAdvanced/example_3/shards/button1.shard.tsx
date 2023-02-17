import React, { useState } from 'react';
import { Box, Button } from '@mantine/core';

export const Button1 = () => {
  const [button1, setButton1] = useState<string>('ON');
  const handleButton1 = () =>
    setButton1((prevState) => {
      return prevState === 'OFF' ? 'ON' : 'OFF';
    });

  return (
    <Box>
      <Button variant={'outline'} onClick={handleButton1}>
        {button1}
      </Button>
    </Box>
  );
};
