function calculateMonthlyExpenses(incomeList, livingCost) {
    if (!Array.isArray(incomeList) || typeof livingCost !== "number") {
        return "Invalid Input";
    }

    let totalIncome = 0;
    for (let i = 0; i < incomeList.length; i++) {
        if (typeof incomeList[i] !== "number") {
            return "Invalid Input";
        }
        totalIncome += incomeList[i];
    }
    const savings = totalIncome - livingCost;
    return savings > 0 ? savings : "Save more money";
}


console.log(calculateMonthlyExpenses([3000, 2000, 1500], 5000)); 