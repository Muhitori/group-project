export const authStateSelector = (state) => state.auth;

export const tokenSelector = (state) => state.auth.token;

export const currentUserSelector = (state) => state.auth.currentUser;

export const currentUserIdSelector = (state) => state.auth.currentUser.id;
