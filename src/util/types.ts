export type JSObject<ValueType = any> = { [key: string]: ValueType }
export type SprintJson = { sprints: Array<Sprint> }
export type Sprint = {
  name: string
  start: number
  end: number
  description: string
}
