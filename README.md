# TT

<p>
  <a href="https://travis-ci.org/Thomazella/tt"><img src="https://img.shields.io/travis/Thomazella/tt/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>
<br/>

Time Tracking Tool

# Roadmap

- [ ] foo
- [ ] foo
- [ ] foo
- [ ] foo

# API

## tt

if not tracking, start a new entry
if tracking, stop

## tt config

access configs tru cli

## tt in <name>

start a new entry
optionally assign <name> as the task for entry
warn if already in

## tt out

stop tracking the current entry
if not tracking print a warning

## Misc

make a folder ~/.tt
make config file ~/.tt/ttrc.json
make history file ~/.tt/history.json

  tracking: false,
  currentTask: "Personal task",
  In: undefined,
  Out: undefined

  tracking: true,
  currentTask: "Personal task",
  In: 8888,
  Out: undefined

  tracking: false,
  currentTask: "Personal task",
  In: 8888,
  Out: 1003