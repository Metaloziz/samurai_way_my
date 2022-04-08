import {
  appReducer,
  setInitializedAPPAC,
  UserDataInitialStateType,
} from 'redux/app_reducer';

let userDataInitialState: UserDataInitialStateType;

beforeEach(() => {
  userDataInitialState = {
    initialized: false,
  };
});

test('initialized test', () => {
  const action = setInitializedAPPAC({ initialized: true });

  const endState = appReducer(userDataInitialState, action);

  expect(endState).not.toBe(userDataInitialState);
  expect(endState.initialized).toBe(true);
});
