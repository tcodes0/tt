import { FunctionType } from '../util'

export type Operation = FunctionType<typeof operation>

export default function operation(
  mode: string,
  input: string[] | string = [],
  extra: { message?: string } = {},
) {
  const operationObject = {
    mode,
    input: Array.isArray(input) ? input : [input],
    ...extra,
  }
  return operationObject
}
