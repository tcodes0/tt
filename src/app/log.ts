import { Task } from '../core'
import { ttStdout } from '../util'

const stringify = (arg: any) => JSON.stringify(arg)
const fmtMs = (time: number) => {
  const seconds = time / 1000
  return `${seconds} seconds`
}
const indent = '  '

export default async function log(task: Task) {
  const { name, sprints } = task

  if (!sprints[0].end) {
    const seconds = Date.now() - sprints[0].start

    return ttStdout(`
    ${name}
    ${indent}is tracking.
    ${indent}Duration so far: ${fmtMs(seconds)}
    `)
  }

  let message = `
  ${name}
  ${indent}Sprints
  `
  let i = 0
  let total = 0
  for (const sprint of sprints) {
    i++
    const duration = (sprint.end || Date.now()) - sprint.start
    total += duration
    message += `${indent}${i}: ${fmtMs(duration)}
    `
  }
  return ttStdout(`${message}
  ${indent}total: ${fmtMs(total)}
  `)
}
