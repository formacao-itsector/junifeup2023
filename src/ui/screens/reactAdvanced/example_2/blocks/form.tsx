import React, { ChangeEvent, FC } from 'react';
import { Box, Button, Input, Space } from '@mantine/core';

interface FormProps {
  input1: string;
  input2: string;
  button1: string;
  handleInput1(event: ChangeEvent<HTMLInputElement>): void;
  handleInput2(event: ChangeEvent<HTMLInputElement>): void;
  handleButton1(): void;
}

export const Form: FC<FormProps> = ({ input1, input2, button1, handleInput1, handleInput2, handleButton1 }) => {
  return (
    <>
      <Box>
        <Input placeholder="input #1" value={input1} onChange={handleInput1} />
      </Box>
      <Space h={32} />
      <Box>
        <Input placeholder="input #2" value={input2} onChange={handleInput2} />
      </Box>
      <Space h={32} />
      <Box>
        <Button variant={'outline'} onClick={handleButton1}>
          {button1}
        </Button>
      </Box>
    </>
  );
};
