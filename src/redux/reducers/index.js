import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE
} from "../../constants";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        myList: [...state.myList, action.payload]
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload
      };
      case GET_VIDEO_SOURCE:
        const id = Number(action.payload);
        return {
          ...state,
          playing: state.trends.concat(state.originals).find(item=>item.id=== id) || {}
        };
      
    default:
      return state;
      break;
  }
};

export default reducer;
