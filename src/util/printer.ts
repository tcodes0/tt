import { Sprint } from './types'
import parseTimeDifference from './parseTimeDifference'
import moment from 'moment'

function stringBuilder(s: Sprint) {
  let output = ''
  let { start, end, name, description } = s

  const startMoment = moment(new Date(start))
  const endMoment = moment(new Date(end))

  output += `${name}\n`
  output += `Start\t\t${startMoment.format('hh:mm dddd MMMM DD')}\n`
  output += `End\t\t${end ? endMoment.format('hh:mm dddd MMMM DD') : '--'}\n`
  if (start && end) {
    const difference = endMoment.diff(startMoment)
    const { hours } = parseTimeDifference(difference)
    output += `Duration\t${hours}h\n`
  }
  if (description) {
    output += `Description\t${description}\n`
  }
  return output
}

export default function printer(sprints?: Array<Sprint> | null) {
  if (!sprints || sprints.length === 0) {
    return process.stdout.write('Nothing tracked\n')
  }

  const result = [...sprints]
    .reverse()
    .map(stringBuilder)
    .join('\n')
  return process.stdout.write(result)
}
