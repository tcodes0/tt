import reader from '../util/reader'
import parser from '../util/parser'
import printer from '../util/printer'
import { SprintJson } from '../util/types'
import writer from '../util/writer'
import helpMessage from '../util/helpMessage'

export default async function cli(argsOrMock: Array<string> = process.argv) {
  const { sprints }: SprintJson = (await reader()) || { sprints: [] }
  const parsed = parser(argsOrMock)
  if (parsed.mode === 'print') {
    return printer(sprints)
  }
  if (parsed.mode === 'delete') {
    return await writer({ sprints: [] })
  }
  if (parsed.mode === 'help') {
    return helpMessage()
  }
  if (parsed.mode === 'default') {
    const [sprintName = 'Personal task'] = parsed.args
    const sprintsWithName = sprints.filter(s => s.name === sprintName)
    const [lastSprint] = sprintsWithName
    if (lastSprint && !lastSprint.end) {
      const lastSprintIndex = sprints.findIndex(
        s => s.start === lastSprint.start,
      )
      const sprintWithEndTime = { ...lastSprint, end: Date.now() }
      const newSprints = [
        ...sprints.slice(0, lastSprintIndex),
        sprintWithEndTime,
        ...sprints.slice(lastSprintIndex + 1),
      ]
      await writer({ sprints: newSprints })
      return
    }
    const sprintWithStartTime = {
      end: null,
      name: sprintName,
      start: Date.now(),
      description: parsed.args.slice(1).join(' '),
    }
    const newSprints = [sprintWithStartTime, ...sprints]
    await writer({ sprints: newSprints })
  }
}
