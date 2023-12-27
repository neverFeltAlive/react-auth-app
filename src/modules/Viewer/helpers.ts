import { Data, TransformedData } from 'types';

export function transformData(data: Data[]): TransformedData[] {
  return data.map((item) =>
    item?.children?.length
      ? ({
          ...item,
          label: item.name,
          children: transformData(item.children),
        } as TransformedData)
      : ({ ...item, label: item.name } as TransformedData)
  );
}

export function breadthSearch(items: TransformedData[], key: string) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const queue = [item];
    while (queue.length > 0) {
      const currentItem = queue.shift();

      if (currentItem?.key === key) {
        return currentItem;
      }

      if (currentItem?.children?.length) {
        queue.push(...currentItem.children);
      }
    }
  }

  return null;
}
