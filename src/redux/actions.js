import { NAV_VISIBLE, NAV_INVISIBLE } from "./constants";
import { fetchProfile } from "./actions/profileActions";
import { sortByWins, sortByXp } from "./actions/sortingActions";
import { loginTelegram } from "./actions/loginActions";

export const showNav = () => ({
  type: NAV_VISIBLE
});

export const hideNav = () => ({
  type: NAV_INVISIBLE
});

export { fetchProfile, sortByWins, sortByXp, loginTelegram };
