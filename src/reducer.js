const initialState = {
    count: 0, // Nilai awal state
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state; // Jika tidak ada action yang cocok, kembalikan state saat ini
    }
  };
  
  export default counterReducer;
  