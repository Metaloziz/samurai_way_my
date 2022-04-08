import { userDataPT } from 'components/Header/Header';
import { authReducer, getCaptchaAC, setUserDataAC } from 'redux/auth_reducer';

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
    isAuth: false, // it is not from API
    captchaURL: '',
  };
});
describe('auth-reducer', () => {
  test('authorised signature test', () => {
    const newData: userDataPT = {
      data: {
        id: 10,
        login: 'absence',
        email: 'marriage',
      },
      messages: ['buy'],
      fieldsErrors: ['pump'],
      resultCode: 439,
      isAuth: true, // it is not from API
      captchaURL: '',
    };

    const action = setUserDataAC({ data: newData, isAuth: true });

    const endState = authReducer(userDataInitialState, action);

    expect(endState).not.toBe(userDataInitialState);
    expect(endState.isAuth).toBe(true);
    expect(endState.data).toBe(newData.data);
  });

  test('get captcha url', () => {
    const captchaURL = 'some url';

    const action = getCaptchaAC({ url: captchaURL });

    const endState = authReducer(userDataInitialState, action);

    expect(endState).not.toBe(userDataInitialState);
    expect(endState.captchaURL).toBe(captchaURL);
  });
});
