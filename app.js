const account = {
  name: "Nabeel",
  expenses: [],
  income: [],
  addExpenses() {
    let expenseType = prompt("What was your expense? (rent/gas/food etc)");
    obj[expenseType] = account.expenses.label;
    // account.expenses.push(expenseType);
    let expense = parseFloat(prompt("Add your expense: "));
    obj[expense] = account.expenses.value;
    account.expenses.push(obj);
    // account.expenses.push({ expenseType: expense });
    menu();
  },
  addIncome() {
    let userIncome = parseFloat(prompt("Add your income: "));
    this.income.push(userIncome);
    menu();
  },
  listAllExpenses() {
    account.expenses.forEach((item, i) => {
      console.log(
        `Expense nr:` +
          `${i + 1}: ${item[0].expenseType} - Amount ${item[0].expense}\n`
      );
      // console.log(element);
      // alert(`Expense nr:` + `${i + 1}: ${element} - Amount ${element}\n`);
    });

    menu();
  },
  getSummary() {
    let total = account.income - account.expenses;
    alert(total);
  },
};

const menu = () => {
  const choice = parseFloat(
    prompt(
      `EXPENSE TRACKER\n Select a choice ${1}. Add income ${2}. add expense ${3}. List all expenses ${4}. Get summary`
    )
  );

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
    // default:
    //   alert("Please choice from the menu");
    //   menu();
  }
};

menu();
