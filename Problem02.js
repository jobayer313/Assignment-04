function countVowels(input){
    if(typeof input !== "string"){
        return("Invalid Input")
    }
    const checkVowels = input.match(/[aeiouAEIOU]/g)
    return checkVowels ? checkVowels.length : 0
}

console.log(countVowels("hello"))