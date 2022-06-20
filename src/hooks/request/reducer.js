export const actions = {
  IS_LOADING: "isLoading",
  SUCCESS: "success",
  ERROR: "error",
  FAILED: "failed",
};

export const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

export default function reducer(state, action) {
  switch (action.type) {
    case actions.IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actions.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    case actions.ERROR:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload,
      };
    case actions.FAILED:
      return {
        ...state,
        isLoading: false,
        data: null,
        error: null,
      };
    default:
      return state;
  }
}
