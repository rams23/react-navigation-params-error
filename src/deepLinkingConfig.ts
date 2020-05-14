import {
  BLUETOOTH_SCREEN,
  HOME_TAB,
  HOMEPAGE_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
  SETTINGS_TAB,
} from './constants';

export const config = {
  [HOME_TAB]: {
    initialRouteName: HOMEPAGE_SCREEN,
    screens: {
      [HOMEPAGE_SCREEN]: 'home',
      [PROFILE_SCREEN]: {
        path: 'profile',
      },
    },
  },
  [SETTINGS_TAB]: {
    initialRouteName: SETTINGS_SCREEN,
    [SETTINGS_SCREEN]: 'settings',
    [BLUETOOTH_SCREEN]: 'bluetooth',
  },
};
