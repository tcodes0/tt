export default function operation(
  mode: string,
  input: any[] | any = [],
  extra: { message?: string } = {},
) {
  const operationObject = {
    mode,
    input: Array.isArray(input) ? input : [input],
    ...extra,
  }
  return operationObject
}
