// filterReducerDefaultState
const filterReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined
};

// FilterReducer is a pure function
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'textFilter':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filterReducer;
