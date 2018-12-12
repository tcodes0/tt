import { readFileSync } from "fs"

export type Object<T = undefined> = { [key: string]: T }
export type EmptyObject = { [key: string]: never }
export type ReturnType<Func> = Func extends (...a: any) => infer Return
  ? Return
  : never
export type ArgType<Func> = Func extends (...a: infer Args) => any
  ? Args
  : never
export type FunctionType<Func> = {
  args: ArgType<Func>
  return: ReturnType<Func>
}
export type PayloadType<Action> = Action extends (payload: infer P) => any
  ? Exclude<P, undefined>
  : never

export type ReadFileSyncArg2 = FunctionType<typeof readFileSync>["args"][1]
