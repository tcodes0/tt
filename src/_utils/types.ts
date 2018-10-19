export type OptionsT = {
  encoding: string | null;
  flag: string;
};

export type Task = {
  name: string;
  start: number;
  end?: number;
};

export type EmptyObject = { [key: string]: never };
