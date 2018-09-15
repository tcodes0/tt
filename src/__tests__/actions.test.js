import action from "../actions";

test("toggle tracking", () => {
  expect(action.toggleTracking()).toEqual({
    type: "TOGGLE_TRACKING"
  });
});

test("start tracking", () => {
  expect(action.startTracking()).toEqual({
    type: "START_TRACKING",
    value: "Personal task"
  });

  expect(action.startTracking("foo")).toEqual({
    type: "START_TRACKING",
    value: "foo"
  });
});

test("stop tracking", () => {
  expect(action.stopTracking()).toEqual({
    type: "STOP_TRACKING",
    value: "Personal task"
  });

  expect(action.stopTracking("foo")).toEqual({
    type: "STOP_TRACKING",
    value: "foo"
  });
});

test("no args action", () => {
  expect(action.noArgsAction()).toEqual({
    type: "NO_ARGS_ACTION"
  });
});

test("config", () => {
  expect(action.config()).toEqual({
    type: "CONFIG"
  });
});
