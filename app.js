const account = {
  name: "Nabeel",
  expenses: [],
  income: [],
  addExpenses() {
    let expenseType = prompt("What was your expense? (rent/gas/food etc)");
    account.expenses.push(expenseType);
    let expense = parseFloat(prompt("Add your expense: "));
    account.expenses.push(expense);
    menu();
  },
  addIncome() {
    let userIncome = parseFloat(prompt("Add your income: "));
    this.income.push(userIncome);
    menu();
  },
  listAllExpenses() {
    account.expenses.forEach((value, i) => {
      alert(`Expense nr${i} ${value} - Amount ${account.expenses}`);
    });
    menu();
  },
  getSummary() {
    alert();
  },
};

console.log(account.expenses);

// const menu = () => {
//   const choice = parseFloat(
//     prompt(
//       `EXPENSE TRACKER\n Select a choice ${1}. Add income ${2}. add expense ${3}. List all expenses ${4}. Get summary`
//     )
//   );

//   switch (choice) {
//     case 1:
//       account.addIncome();
//       break;
//     case 2:
//       account.addExpenses();
//       break;
//     case 3:
//       account.listAllExpenses();
//       break;
//     case 4:
//       account.getSummary();
//       break;
//     default:
//       alert("Please choice from the menu");
//       menu();
//   }
// };

// menu();
