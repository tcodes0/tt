import actions from "../actions";

test("toggle tracking", () => {
  expect(actions.toggleTracking()).toEqual({
    type: "TOGGLE_TRACKING"
  });
});

test("start tracking", () => {
  expect(actions.startTracking()).toEqual({
    type: "START_TRACKING",
    value: expect.any(String)
  });

  expect(actions.startTracking("foo")).toEqual({
    type: "START_TRACKING",
    value: "foo"
  });
});

test("stop tracking", () => {
  expect(actions.stopTracking()).toEqual({
    type: "STOP_TRACKING",
    value: expect.any(String)
  });

  expect(actions.stopTracking("foo")).toEqual({
    type: "STOP_TRACKING",
    value: "foo"
  });
});

test("no args action", () => {
  expect(actions.noArgsAction()).toEqual({
    type: "NO_ARGS_ACTION"
  });
});

test("config", () => {
  expect(actions.config()).toEqual({
    type: "CONFIG"
  });
});

test("History push", () => {
  expect(actions.historyPush({ task: "foo" })).toEqual({
    type: "HISTORY_PUSH",
    task: { task: "foo" }
  });
});
