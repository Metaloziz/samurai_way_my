import {
  app_reducer,
  setInitializedAPPAC,
  userDataInitialStateType,
} from 'redux/app_reducer';

let userDataInitialState: userDataInitialStateType;

beforeEach(() => {
  userDataInitialState = {
    initialized: false,
  };
});

test('initialized test', () => {
  let action = setInitializedAPPAC(true);

  let endState = app_reducer(userDataInitialState, action);

  expect(endState).not.toBe(userDataInitialState);
  expect(endState.initialized).toBe(true);
});


