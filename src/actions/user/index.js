import Types from "./types";

export const login = (payload) => ({
  type: Types.Login,
  payload,
});
export const logout = (payload) => ({
  type: Types.Logout,
  payload,
});
export const logoutProfile = (payload) => ({
  type: Types.LogoutProfile,
  payload,
});
