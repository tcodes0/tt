import { parser, operation } from '../src/app'
import { cliArgs } from '../src/util'

test('operation', () => {
  {
    const result = operation('mode new task', 'studying')
    expect(result).toMatchObject({ mode: expect.any(String) })
    const { mode, ...nonMode } = result

    Object.values(nonMode).forEach(value => {
      expect(value).toEqual(expect.any(Array))
    })
  }

  {
    const result = operation('mode rm task', ['studying', 'gaming'])
    const { mode, ...nonMode } = result

    Object.values(nonMode).forEach(value => {
      expect(value).toEqual(expect.any(Array))
    })
  }

  {
    const result = operation('mode foo', ['input bar'], { message: 'baz' })
    expect(result.message).toBe('baz')
  }
})

test('parser basic', () => {
  let result

  result = parser(cliArgs())
  expect(result).toMatchObject({ mode: 'noArgs', input: [] })

  result = parser(cliArgs('github work'))
  expect(result).toMatchObject({ mode: 'new', input: ['github work'] })

  result = parser(cliArgs('new', 'github work'))
  expect(result).toMatchObject({ mode: 'new', input: ['github work'] })

  result = parser(cliArgs('rm'))
  expect(result).toMatchObject({ mode: 'rm', input: [] })

  result = parser(cliArgs('log'))
  expect(result).toMatchObject({ mode: 'log', input: [] })

  result = parser(cliArgs('log', 'week'))
  expect(result).toMatchObject({ mode: 'log', input: ['week'] })

  result = parser(cliArgs('config'))
  expect(result).toMatchObject({ mode: 'config', input: [] })

  result = parser(cliArgs('-h'))
  expect(result).toMatchObject({ mode: 'help', input: [] })

  result = parser(cliArgs('--help'))
  expect(result).toMatchObject({ mode: 'help', input: [] })

  result = parser(cliArgs('github', 'work'))
  expect(result).toMatchObject({ mode: 'parseErr', input: expect.any(Array) })

  result = parser(cliArgs('newtask'))
  expect(result).toMatchObject({ mode: 'new', input: ['newtask'] })

  result = parser(cliArgs('stop'))
  expect(result).toMatchObject({ mode: 'stop', input: [] })

  result = parser(cliArgs('stop', 'foo'))
  expect(result).toMatchObject({ mode: 'parseErr', input: expect.any(Array) })
})

test('parser edge cases', () => {
  let result

  result = parser(cliArgs('new', 'rm'))
  expect(result).toMatchObject({ mode: 'parseErr', input: expect.any(Array) })

  result = parser(cliArgs('-h', 'foobar'))
  expect(result).toMatchObject({ mode: 'parseErr', input: expect.any(Array) })

  // specify which opts log and other take
  // result = parser(cliArgs("log", "newaf"));
  // expect(result).toMatchObject({ mode: "parseErr", input: ["log", "log"] });
})
