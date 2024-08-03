function addExpense() {
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  expenses.push({ amount, description, category });
  localStorage.setItem('expenses', JSON.stringify(expenses));

  displayExpenses();
}

function deleteExpense(index) {
  let expenses = JSON.parse(localStorage.getItem('expenses'));
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));

  displayExpenses();
}

function displayExpenses() {
  const expensesList = document.getElementById('expenseList');
  const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

  expensesList.innerHTML = '';
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${expense.amount} - ${expense.description} - ${expense.category} <button onclick="deleteExpense(${index})">Delete</button>`;
    expensesList.appendChild(li);
  });
}
displayExpenses();
