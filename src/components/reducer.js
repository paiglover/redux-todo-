const initialState = {
  item: {
    text: "",
    complete: false,
  },
  list: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        item: {
          text: action.payload.text,
          complete: false,
        },
      };
    case "ADD_TODO":
      return { ...state, list: [...state.list, state.item] };
    case "SHOW_STATE":
      console.log(state);
    default:
      return state;
  }
}
