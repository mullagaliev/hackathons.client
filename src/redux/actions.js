import { NAV_VISIBLE, NAV_INVISIBLE } from './constants';

export const showNav = () => ({
  type: NAV_VISIBLE
});

export const hideNav = () => ({
  type: NAV_INVISIBLE
});
