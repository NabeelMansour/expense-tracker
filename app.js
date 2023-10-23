const account = {
  name: "Nabeel",
  expenses: [],
  income: [],
  addExpenses() {
    let expense = parseFloat(prompt("Add your expense: "));
    this.expenses.push(expense);
  },
  addIncome() {
    let userIncome = parseFloat(prompt("Add your income: "));
    this.income.push(userIncome);
  },
  listAllExpenses() {
    expenses.forEach((element) => {
      alert(``);
    });
    alert(this.expenses);
  },
  getSummary() {
    alert();
  },
};

const menu = () => {
  prompt(
    "EXPENSE TRACKER\n Select a choise 1. Add income 2. add expense 3. List all expenses 4. Get summary"
  );
};

menu();
