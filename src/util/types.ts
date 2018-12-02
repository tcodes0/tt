export type FsOptions = {
  encoding: string | null
  flag?: string
  sync?: boolean
}

export type Task = {
  name: string
  start: number
  end?: number
}

export type Object = { [key: string]: any }
export type EmptyObject = { [key: string]: never }

export type FsArg = {
  path?: string
  opts?: FsOptions | string
  log?: boolean
  file?: string
  data?: string | Object
}

export type Operation = {
  mode: string
  input: any[] | any
  message?: string
  [key: string]: any
}
