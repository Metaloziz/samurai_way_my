import { userDataPT } from 'components/Header/Header';
import { auth_reducer, getCaptchaAC, setUserDataAC } from 'redux/auth_reducer';

let userDataInitialState: userDataPT;

beforeEach(() => {
  userDataInitialState = {
    data: {
      id: 1,
      login: '',
      email: '',
    },
    messages: [''],
    fieldsErrors: [''],
    resultCode: 1,
    isAuth: false,  // it is not from API
    captchaURL: '',
  };
});

test('authorised signature test', () => {

  let newData: userDataPT = {
    data: {
      id: 10,
      login: 'absence',
      email: 'marriage',
    },
    messages: ['buy'],
    fieldsErrors: ['pump'],
    resultCode: 439,
    isAuth: true,  // it is not from API
    captchaURL: '',
  };

  let action = setUserDataAC(newData, true);

  let endState = auth_reducer(userDataInitialState, action);

  expect(endState).not.toBe(userDataInitialState);
  expect(endState.isAuth).toBe(true);
  expect(endState.data).toBe(newData.data);
});

test('get captcha url', () => {

  let captchaURL = 'some url';

  let action = getCaptchaAC(captchaURL);

  let endState = auth_reducer(userDataInitialState, action);

  expect(endState).not.toBe(userDataInitialState);
  expect(endState.captchaURL).toBe(captchaURL);
});


