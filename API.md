# API

## Glossary

- tracking: Means a task has been started and is in progress.
- recent: Means `tt`, with no args, was called in the last 10s.

## tt

if not tracking, run `tt new`

else,

if not recent, run `tt log`

else, run `tt stop`

## tt work on papers

if not tracking, start a new task and assign "work on papers" as the name.

else,

assign "work on papers" as the name for the tracked task.

## tt new

if not tracking, start a new task with default name.

else,

stop current task,
run `tt log last`,
start new task with default name.

## tt new coding

if not tracking, start a new task with name "coding".

else,

stop current task,
run `tt log last`,
start new task with name "coding".

## tt stop

if not tracking, exit with message.

else,

stop current task,

## tt stop coding

if not tracking, exit with message.

else,

stop "coding",

## tt rm

if tracking, error out.

else,

remove last task from history.

## tt rm study math

if tracking, error out.

else,

remove "study math" from history.

## tt log

run `tt log last`

## tt continue

run `tt continue last`

## tt continue last

if tracking, stop current task.

move last entry from history to state, sets it as active task and continues its time tracking.

## tt continue play games

if tracking, stop current task.

move play games from history to state, sets play games as active task and continues its time tracking.

## tt log today

_today | week | month | all_

print info about tasks for _today_ time window.

## tt log last

if not tracking, prints last task info

else,

shows info on current task

## tt config

access configs tru cli

## tt init

write blank files {} to ttDir.
tt will write state.json with fresh data when shuting down.

## tt help

_-h | --help_

prints CLI help message

# Scenarios

## create - check - stop 1 task

type `tt`

no tasks, so it starts tracking "personal task".

type `tt browsing`, to set the task to "browsing"

do some work on browsing

type `tt`, to see the running time of "browsing"

tt prints the task summary, with duration, and a warning:

`type tt in 10s to stop this task`

type `tt` again to stop task

## multiple tasks, stop task with tt new

>type `tt`

>no tasks, so it starts tracking "personal task".

>type `tt browsing`, to set the task to "browsing"

>do some work on browsing

type `tt new work`, to stop "browsing" and start a new task "work"

tt prints "browsing" summary, with duration.

tt prints text indicating it started a new task named "work".

## multiple tasks with continue

type `tt browsing`

no tasks, so it starts tracking "browsing".

do some work on browsing

type `tt new work`, to stop "browsing" and start a new task "work"

tt prints "browsing" summary, with duration.

tt prints text indicating it started a new task named "work".

do some work on work.

type `tt continue browsing`

tt stops work, prints nothing, continues tracking browsing.

# Technical

`stop` means `push to history`

`ttrc` could offer option to wrap `tt continue` to the last day or not
