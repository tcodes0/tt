import parser from '../src/util/parser'

describe('basic', () => {
  test('self test', () => {
    expect(2).toBe(2)
  })
})

describe('parser', () => {
  test('no args', () => {
    expect(parser(['node', '~/Desktop/tt'])).toEqual({
      mode: 'default',
      args: [],
    })
  })

  test('print', () => {
    expect(parser(['node', '~/Desktop/tt', 'print'])).toEqual({
      mode: 'print',
      args: [],
    })
  })

  test('p', () => {
    expect(parser(['node', '~/Desktop/tt', 'p'])).toEqual({
      mode: 'print',
      args: [],
    })
  })

  test('foo', () => {
    expect(parser(['node', '~/Desktop/tt', 'foo'])).toEqual({
      mode: 'default',
      args: [],
    })
  })
})
