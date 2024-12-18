function createPerfectPassword(input) {
    if (!input || typeof input.name !== "string" || typeof input.year !== "number" || input.year.toString().length !== 4) {
        return "Invalid Input";
    }
    const createPassword = input.name[0].toUpperCase() + input.name.slice(1) + input.year;
    
    return createPassword
}

console.log(createPerfectPassword({ name: "salman", year: 1990 }));