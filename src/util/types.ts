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

export type Object<T = undefined> = { [key: string]: T }
export type EmptyObject = { [key: string]: never }

export type FsArg = {
  path?: string
  opts?: FsOptions | string
  log?: boolean
  file?: string
  data?: string | Object
}

export type ReturnType<Func> = Func extends (...a: any) => infer R ? R : never
export type ArgType<Func> = Func extends (...a: infer A) => any ? A : never
export type FunctionType<Func> = {
  args: ArgType<Func>
  return: ReturnType<Func>
}
export type PayloadType<Action> = Action extends (payload: infer P) => any
  ? Exclude<P, undefined>
  : never
