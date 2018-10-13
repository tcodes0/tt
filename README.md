# (WIP) TT

<p>
  <a href="https://travis-ci.org/Thomazella/tt"><img src="https://img.shields.io/travis/Thomazella/tt/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://github.com/prettier/prettier">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
</p>
<br/>

Time Tracking Tool

# API

operation modes: noArgs, new, rm, log, config, help, parseErr

## tt

if not tracking, start a new entry with default name
if tracking,
if `tt` was called in the last minute
stop task, print summary
else
run tt log

## tt "task"

if not tracking, start a new task and assign "task" as the name
if tracking, assign "task" as the name for task

## tt new ["task"]

if not tracking, start a new task.
if "task" assign new task name to "task"
if tracking, stop current task, print summary, start new task.
if "task" assign new task name to "task"

## tt rm ["task"]

task: task name

if tracking error.
if not tracking and no "task", remove last task from history.
if "task" remove "task" from history.

## tt log ["time"]

time: today | week | month | all | last | last n
n: number of days

if not tracking, prints today's history info.
if no "time", print history for "today".
if "time", print history for "time".
"last" print history for last task only.
if tracking shows info on current task

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
type `tt`, to see the running time
tt prints the task summary, with duration.
type `tt done` to stop task

type `tt`
no entries, so it starts logging an unnamed.
tt prints text indicating it started a new task.
type `tt foo`, to set the task to "foo"
do some work
type `tt new bar`, to stop "foo" and start a new task "bar"
tt prints "foo" summary, with duration.
tt prints text indicating it started a new task named "bar".
type `tt` to stop "bar"
