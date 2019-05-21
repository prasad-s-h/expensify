import uuid from 'uuid';

// AddExpense
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// EditExpense
export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

// RemoveExpense
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});
