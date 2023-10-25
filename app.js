// declaring the object with username and different methods for the user choices

const account = {
  name: "Nabeel",
  expenses: [],
  income: [],
  addExpenses() {
    let expenseType = prompt("What was your expense? (rent/gas/food etc)");
    let expense = parseFloat(prompt("Add your expense: "));
    let costs = {
      expenseType: expenseType,
      expense: expense,
    };
    account.expenses.push(costs);

    menu();
  },
  addIncome() {
    let userIncome = parseFloat(prompt("Add your income: "));
    this.income.push(userIncome);
    menu();
  },
  listAllExpenses() {
    account.expenses.forEach((item, i) => {
      alert(
        `Expense nr:` +
          `${i + 1}: ${item.expenseType} - Amount ${item.expense}\n`
      );
    });

    menu();
  },
  getSummary() {
    let totalExpense = 0;
    for (let i of account.expenses) {
      totalExpense += i.expense;
    }
    alert(`${account.name}, your summary is: ${account.income - totalExpense}`);
  },
};

// Declared the menu function that takes user input

const menu = () => {
  const choice = parseFloat(
    prompt(
      `Please select a choice :\n 1. Add income\n 2. Add expense\n 3. List all expenses\n 4. Get summary`
    )
  );

  // Swith statement that takes the user input and calls the method of choice

  switch (choice) {
    case 1:
      account.addIncome();
      break;
    case 2:
      account.addExpenses();
      break;
    case 3:
      account.listAllExpenses();
      break;
    case 4:
      account.getSummary();
      break;
    default:
      alert("Please choice from the menu");
      menu();
  }
};

menu();
