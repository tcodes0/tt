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

if no config files, print help and exit
else
  if not tracking, start a new entry
  if tracking, stop

## tt "task"

if no config files, create config files with defaults
if not tracking, start a new entry and assign "task" as the task for entry
if tracking, assign "task" as the task for entry

## tt new ["task"]

if not tracking, start a new entry.
  if "task" assign new task name to "task"
if tracking, stop current task, print summary, start new task.
  if "task" assign new task name to "task"

## tt rm [<what>]

if tracking error.
else remove last entry from state.
if <what> remove <what> from state.

## tt log [<when>]["last"]

if not tracking, prints today's history info.
  if no <when> default to "today"
  if <when>, print <when> time window.
  "last" shows last task only.
else shows info on current task

## tt config

access configs tru cli

## tt -h | --help | help

print CLI help message

## Misc

✔ make a folder ~/.tt
✔ make config file ~/.tt/ttrc.json
✔ make history file ~/.tt/history.json
✔ make state file ~/.tt/state.json

type `tt`
no entries, so it starts logging an unnamed.
type `tt foo`, to set the task to "foo"
do some work
type `tt`, to stop tracking
tt prints the task summary, with duration.
type `tt log` to see today's entries.

type `tt`
no entries, so it starts logging an unnamed.
tt prints text indicating it started a new task.
type `tt foo`, to set the task to "foo"
do some work
type `tt new bar`, to auto stop "foo" and start a new task "bar"
tt prints "foo" summary, with duration.
tt prints text indicating it started a new task.
type `tt` to stop "bar"
