import { ActionPT } from './store_redux';

import { ItemPT } from 'components/Navigation/Navigation';

export type sidebarATPT = ReturnType<typeof sidebarAC>;

const initialState: Array<ItemPT> = [
  { path: '/profile', title: 'Profile' },
  { path: '/messages', title: 'Messages' },
  { path: '/users', title: 'Users' },
  { path: '/news', title: 'News' },
  { path: '/music', title: 'Music' },
  { path: '/settings', title: 'Settings' },
  { path: '/login', title: 'Login' },
];

const SIDE_BAR_TEST = 'SIDE_BAR_TEST';

export const sidebarAC = () => ({ type: SIDE_BAR_TEST } as const);

export const sidebarReducer = (
  state: Array<ItemPT> = initialState,
  action: ActionPT,
): Array<ItemPT> => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = action;
  return state;
};
