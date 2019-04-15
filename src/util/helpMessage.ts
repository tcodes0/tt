export default function helpMessage() {
  return process.stdout.write(`
  tt help

  tt foo\t\t starts tracking task with name 'foo'
  tt foo\t\t stops tracking foo
  tt\t\t\t starts tracking 'Personal task'
  tt del, tt d\t\t clears tracked tasks
  tt print, tt p\t prints tracked info

  `)
}
