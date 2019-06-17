const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'GET_DATA':
          return { ...state, loading: true };
       case 'DATA_RECEIVED':console.log(action);            
                            return { ...state, data: action.json, loading: false }
    
       default:
          return state;
     }
  };
  export default reducer;