const initialState = {
  objsArray: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_OBJ': {
      const { objs } = action.payload;
      return {
        ...state,
        objsArray: [...state.objsArr, objs]
      };
    }
    default:
      return state;
  }
}
