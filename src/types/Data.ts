export interface Data {
  key: string;
  name: string;
  children?: Data[];
}

export interface TransformedData extends Data {
  children?: TransformedData[];
  label: string;
}
