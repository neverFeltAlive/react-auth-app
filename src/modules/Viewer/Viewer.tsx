import { mocDataFetch } from 'helpers.ts';
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Tree, TreeSelectionEvent } from 'primereact/tree';
import { useEffect, useMemo, useState } from 'react';
import { TransformedData } from 'types';

import { breadthSearch, transformData } from './helpers.ts';

export const Viewer = () => {
  const [data, setData] = useState<TransformedData[] | undefined>(undefined);
  const [selectedKey, setSelectedKey] = useState<string>('');

  const selectedNode = useMemo(() => {
    return data && breadthSearch(data, selectedKey);
  }, [selectedKey, data]);

  useEffect(() => {
    (async () => {
      const fetchedData = await mocDataFetch();
      setData(transformData(fetchedData));
    })();
  }, []);

  const handleTreeSelection = (event: TreeSelectionEvent) => {
    setSelectedKey(event.value as string);
  };

  const handleListSelection = (event: ListBoxChangeEvent) => {
    setSelectedKey(event.value);
  };

  return (
    <Splitter className="h-full">
      <SplitterPanel className="flex align-center justify-center p-10">
        <Tree
          selectionKeys={selectedKey}
          value={data}
          className="w-full"
          selectionMode="single"
          onSelectionChange={handleTreeSelection}
        />
      </SplitterPanel>
      <SplitterPanel className="flex align-center justify-center p-10">
        {selectedNode?.children?.length && (
          <ListBox
            className="w-full"
            onChange={handleListSelection}
            options={selectedNode.children.map((child) => ({
              label: child.label,
              value: child.key,
            }))}
          />
        )}
      </SplitterPanel>
    </Splitter>
  );
};
