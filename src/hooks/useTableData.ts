import { GENERATED_DATA } from 'helpers.ts';
import { useState } from 'react';
import { User } from 'types';

export function useTableData() {
  const [data, setData] = useState(GENERATED_DATA);

  const updateData = async (cellId: string, newData: string) => {
    const [id, name] = cellId.split('.');
    if (!id || !name) return;
    setData((prevState) =>
      [...prevState].map((row) =>
        row.userId === id ? { ...row, [name]: newData } : row
      )
    );
  };

  return [data, updateData] as [User[], typeof updateData];
}
