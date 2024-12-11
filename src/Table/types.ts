export type DataPoint = {
  date: string;
  value: number;
};

export type RowData = {
  indicator: string;
  icon?: JSX.Element; // Optional icon for each indicator
  data: DataPoint[];
  children?: RowData[];
};
