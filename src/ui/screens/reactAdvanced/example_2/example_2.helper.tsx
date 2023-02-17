import React, { ChangeEvent, useMemo, useState } from 'react';
import * as jsonTable from '../mock_table/table_10000.json';
import { TableItems } from '../types';

export const useExample2Helper = () => {
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [button1, setButton1] = useState<string>('ON');

  const handleInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput1(event.currentTarget.value);
  };

  const handleInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput2(event.currentTarget.value);
  };

  const handleButton1 = () => {
    setButton1((prevState) => {
      return prevState === 'OFF' ? 'ON' : 'OFF';
    });
  };

  const table = useMemo(() => {
    return JSON.parse(JSON.stringify(jsonTable)).default;
  }, [jsonTable]);

  const rows = useMemo(() => {
    return table.map((element: TableItems) => (
      <tr key={element._id}>
        <td>{element.name}</td>
        <td>{element.age}</td>
        <td>{element.gender}</td>
        <td>{element.eyeColor}</td>
        <td>{element.email}</td>
        <td>{element.favoriteFruit}</td>
      </tr>
    ));
  }, [table]);

  return { input1, input2, button1, handleInput1, handleInput2, handleButton1, rows };
};
