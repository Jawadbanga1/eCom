// const initialState = {
//   objsArray: [],
// };

function objsReducer (state = [], action) {
  // switch (action.type) {
  //   case 'ADD_OBJ': {
  //     const { objs } = action.payload;
  //     return {
  //       ...state,
  //       objsArray: [...state.objsArr, objs]
  //     };
  //   }
  //   default:
  //     return state;
  // }



  switch (action.type) {
    case 'ADD_OBJ':
      return state.concat(action.payload);
    default:
      return state;
  }
}




export default objsReducer;