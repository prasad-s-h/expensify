const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createdAt <= startDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      // first way of returning expense object
      if (startDateMatch && endDateMatch && textMatch) {
        return expense;
      }

      // second way of returning expense object:- advanced concept
      // return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return b.createdAt - a.createdAt;
      }
      if (sortBy === 'amount') {
        return b.amount - a.amount;
      }
    });
};

export default getVisibleExpenses;
