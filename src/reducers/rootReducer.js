import { combineReducers } from "redux";

const rootReducer = combineReducers({
  admirer: admirerReducer,
});

export default rootReducer;

function admirerReducer(state = { admirer: {}, loading: false }, action) {
  switch (action.type) {
    case "CREATING_ADMIRER":
      return {
        ...state,
        admirer: state.admirer,
        loading: true,
      };
    case "CREATE_ADMIRER":
      return {
        ...state,
        admirer: action.payload,
        loading: false,
      };

    case "CHANGING_ATTRIBUTE":
      return {
        ...state,
        admirer: state.admirer,
        loading: true,
      };

    case "CHANGE_ATTRIBUTE":
      return {
        admirer: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
