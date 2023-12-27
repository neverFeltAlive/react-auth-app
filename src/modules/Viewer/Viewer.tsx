import { mocDataFetch } from 'helpers.ts';
import { InputText } from 'primereact/inputtext';
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';
import { Tree, TreeSelectionEvent } from 'primereact/tree';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { TransformedData } from 'types';

import { breadthSearch, transformData } from './helpers.ts';
import { DataOption } from './types.ts';

export const Viewer = () => {
  const [data, setData] = useState<TransformedData[] | undefined>(undefined);
  const [selectedKey, setSelectedKey] = useState<string>('');
  const [searchInput, setSearchInput] = useState('');
  const [sort, setSort] = useState(false);

  const selectedNode = useMemo(() => {
    return data && breadthSearch(data, selectedKey);
  }, [selectedKey, data]);

  const selectedOptions = useMemo(() => {
    const options: DataOption[] = [];
    selectedNode?.children?.forEach((child) => {
      if (searchInput) {
        if (child.label.includes(searchInput)) {
          options.push({
            label: child.label,
            value: child.key,
          });
        }
      } else {
        options.push({
          label: child.label,
          value: child.key,
        });
      }
    });
    return options;
  }, [selectedNode, searchInput]);

  useEffect(() => {
    (async () => {
      const fetchedData = await mocDataFetch();
      setData(transformData(fetchedData));
    })();
  }, []);

  useEffect(() => {
    setSearchInput('');
  }, [selectedKey]);

  const handleTreeSelection = (event: TreeSelectionEvent) =>
    setSelectedKey(event.value as string);

  const handleListSelection = (event: ListBoxChangeEvent) =>
    setSelectedKey(event.value);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(event.target.value);

  const handleChangeSort = (event: ToggleButtonChangeEvent) =>
    setSort(event.value);

  return (
    <Splitter className="h-full">
      <SplitterPanel className="flex align-center justify-center p-10">
        <Tree
          selectionKeys={selectedKey}
          value={data}
          className="w-full min-h-96"
          selectionMode="single"
          onSelectionChange={handleTreeSelection}
        />
      </SplitterPanel>
      <SplitterPanel className="flex align-center justify-center p-10">
        <div className="w-full">
          <div className="mb-2 flex gap-2">
            <InputText
              placeholder="Search"
              type="text"
              className="w-full"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <ToggleButton checked={sort} onChange={handleChangeSort} />
          </div>
          {!!selectedOptions?.length && (
            <ListBox
              className="w-full"
              onChange={handleListSelection}
              options={
                sort
                  ? [...selectedOptions].sort((a, b) =>
                      a.label.localeCompare(b.label)
                    )
                  : selectedOptions
              }
            />
          )}
        </div>
      </SplitterPanel>
    </Splitter>
  );
};
