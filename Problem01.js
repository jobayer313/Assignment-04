function fixWeightMachine(input){
    if(!Array.isArray(input)){
        return("Invalid Input")
    }
    const filterArray = input.filter((value)=>{
            return typeof value === "number" && value > 0
    })
    return filterArray
}

console.log(fixWeightMachine([50,-10,0,75,"a"]))

