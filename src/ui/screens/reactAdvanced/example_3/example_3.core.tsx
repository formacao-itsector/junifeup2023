import React from 'react';
import { Box, Space } from '@mantine/core';
import { Table } from './shards/table.shard';
import { Input1 } from './shards/input1.shard';
import { Input2 } from './shards/input2.shard';
import { Button1 } from './shards/button1.shard';

export const Example_3 = () => {
  return (
    <Box style={{ padding: '64px' }}>
      <Input1 />
      <Space h={32} />
      <Input2 />
      <Space h={32} />
      <Button1 />
      <Space h={32} />
      <Table />
    </Box>
  );
};
