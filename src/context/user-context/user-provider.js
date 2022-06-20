import React, { useReducer } from "react";
import UserContext from "./user-context";
import PropTypes from "prop-types";

const DEFAULT_VALUE = {
  isLogin: false,
  isLoading: true,
  userInfo: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        userInfo: action.payload.userInfo,
        isLogin: true,
        isLoading: false,
      };
    case "logout":
      return {
        ...state,
        userInfo: null,
        isLogin: false,
        isLoading: false,
      };
    case "logout-profile":
      return {
        ...state,
        userInfo: null,
        isLogin: false,
        isLoading: false,
      };
    case "reset":
      return { ...DEFAULT_VALUE, ...action.payload };
    default:
      throw new Error();
  }
}

const UserProvider = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
});

UserProvider.displayName = "UserProvider";
UserProvider.defaultProps = {
  children: null,
};
UserProvider.propTypes = {
  children: PropTypes.node,
};
export default UserProvider;
