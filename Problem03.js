function evaluateResult(input){
    if(!Array.isArray(input)){
        return("Invalid Input")
    }

    const markMaping = input.map((mark)=>{
        if(typeof mark !== "number" || mark < 0 || mark > 100){
            return("Invalid")
        }else if (mark >= 90) {
            return "A+";
        } else if (mark >= 80) {
            return "A";
        } else if (mark >= 70) {
            return "B";
        } else if (mark >= 60) {
            return "C";
        } else if (mark >= 50) {
            return "D";
        } else {
            return "F";
        }
    })
    return markMaping
}

console.log(evaluateResult([45, 67, 82, 95, "a", null]));