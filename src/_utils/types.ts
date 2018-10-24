export type FsOptions = {
  encoding: string | null;
  flag?: string;
  sync?: boolean;
};

export type Task = {
  name: string;
  start: number;
  end?: number;
};

export type EmptyObject = { [key: string]: never };
