import { UserPT, UsersStatePT } from '../components/Users/UsersContainer';
import {
  changePageAC,
  followAC,
  setUsersAC,
  toggleIsFetchingPageAC,
  toggleIsFetchingUserAC,
  usersReducer,
} from '../redux/users_reducer';

let usersInitialState: UsersStatePT;
const ONE = 1;
const ZERO = 0;

beforeEach(() => {
  usersInitialState = {
    items: [
      {
        id: 0,
        name: 'null',
        status: 'null',
        photos: { small: 'null', large: 'null' },
        followed: false,
        isFetchingUser: false, // add this key  myself
      },
    ],
    pageSize: 4,
    totalCount: 36,
    error: 'Error',
    currentPage: 1,
    isFetchingPage: false, // add this key  myself
  };
});

test('fallow user', () => {
  const action = followAC(ZERO);

  const endState = usersReducer(usersInitialState, action);

  expect(endState).not.toBe(usersInitialState);

  expect(endState.items[ZERO].id).toBe(ZERO);
  expect(endState.items[ZERO].followed).toBe(!usersInitialState.items[ZERO].followed);
});

test('set users', () => {
  const users: UserPT[] = [
    {
      id: ONE,
      name: 'song',
      status: 'rough',
      photos: {
        small: 'nowhere',
        large: 'crack',
      },
      followed: false,
      isFetchingUser: true,
    },
  ];

  const totalCount = ZERO + ZERO;

  const action = setUsersAC(users, totalCount);

  const endState = usersReducer(usersInitialState, action);

  expect(endState).not.toBe(usersInitialState);
  expect(endState.totalCount).toBe(totalCount);
  expect(endState.items).toBe(users);
});

test('change page', () => {
  const currentPage = ONE + ONE;

  const action = changePageAC(currentPage);

  const endState = usersReducer(usersInitialState, action);

  expect(endState).not.toBe(usersInitialState);
  expect(endState.currentPage).toBe(currentPage);
});

test('change toggle IsFetching Page', () => {
  const IsFetchingPage = true;
  const action = toggleIsFetchingPageAC(IsFetchingPage);

  const endState = usersReducer(usersInitialState, action);

  expect(endState).not.toBe(usersInitialState);
  expect(endState.isFetchingPage).toBeTruthy();
});

test('change toggle IsFetching User', () => {
  const IsFetchingUser = true;
  const userID = ZERO + ZERO;
  const action = toggleIsFetchingUserAC(IsFetchingUser, userID);

  const endState = usersReducer(usersInitialState, action);

  expect(endState).not.toBe(usersInitialState);
  expect(endState.items[ZERO].isFetchingUser).toBe(IsFetchingUser);
});
