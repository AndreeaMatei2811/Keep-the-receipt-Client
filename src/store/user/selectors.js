export const selectToken = (state) => state.user.token;

export const selectIsAdmin = (state) => state.user.isAdmin;

export const selectIsBlocked = (state) => state.user.accountBlocked;

export const selectUser = (state) => state.user;
