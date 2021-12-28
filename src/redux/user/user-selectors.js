const getUser = state => state.user.user;
const getUserToken = state => state.user.token;
const getIsLoggedIn = state => state.user.isLoggedIn;
const getIsFetchingCurrentUser = state => state.user.isFetchingCurrentUser;
const getError = state => state.user.error;

const userSelectors = {
  getUser,
  getUserToken,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
  getError,
};

export default userSelectors;
