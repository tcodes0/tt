# TT

<p align="left" style="2">
  <a href="https://travis-ci.org/Thomazella/tt">
    <img alt="Build Status"
    src="https://img.shields.io/travis/Thomazella/tt/master.svg?style=for-the-badge&logo=travis&logoColor=ffffff&logoWidth=25" />
  </a>
  <br>
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&logoColor=ffffff">
  </a>
  <br>
  <a href="https://codecov.io/gh/thomazella/tt/branch/master">
    <img alt="Coverage Status" src="https://img.shields.io/codecov/c/github/thomazella/tt/master.svg?style=for-the-badge&logoColor=ffffff&colorB=f01f7a&logo=codecov&logoWidth=25" />
  </a>
  <br>
  <a href="https://typescriptlang.org/">
    <img alt="Typed with Typescript" src="https://img.shields.io/badge/types-typescript-%23294e80.svg?style=for-the-badge&logoColor=ffffff" />
  </a>
  <br>
  <a href="https://redux.js.org">
    <img alt="Using Redux saga" src="https://img.shields.io/badge/state-redux-%23764abc.svg?style=for-the-badge&logo=redux&logoColor=ffffff&logoWidth=25" />
  </a>
  <br>
  <a href="http://nodejs.org/">
    <img alt="Powered by node.js" src="https://img.shields.io/badge/engine-node-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=ffffff&logoWidth=25" />
  </a>
  <br>
  <a href="http://nodejs.org/">
    <img alt="Tested with jest" src="https://img.shields.io/badge/unit_tests-jest-%2399424f.svg?style=for-the-badge&logoColor=ffffff" />
  </a>
</p>
<br/>

Time Tracking Tool

## Doing

start
const data = reader()
const mode = parser()
do we have an argument? if not argument is "personal task"
is argument in the data json?
if it is in the json, punch it out
else punch it in

-- fn reader file
is ~/.tt there? if not make it
read ~/.tt/tracking.json. catch error, touch the json
if we read some data, return that data.
else return null
--

-- fn writer file payload
is ~/.tt there? if not make it
stringify payload and write it
return payload
--

-- fn print
const data = reader()
if no data, print "nothing tracked"
stringify data and print it
--

-- fn parser
if first arg is "print or p"
return {
mode: 'print'
args: []
}
else return {
mode: 'default'
args: [ user args here ]
}
--

Vprinter
Vparser
Vreader
Vwriter
main

tracking.json
{
  sprints: [
    {
      name: '',
      startTime: '',
      endTime: '',
    }
  ]
}