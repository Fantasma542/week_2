function hasEven(myNums:number[]) {
    let i = 0;
    while (i< myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true
        } 
        i++;
    }
    return false
}
let numeros = hasEven([3, 1, 7, 5, 9, 15, 21, 25, 35, 45, 75, 80])
console.log(numeros);

function startWhithM(myNames:string[]) {
    let i = 0;
    while (i< myNames.length) {
        if (myNames[i][0] !== 'M') {
            return false
        } 
        i++;
    }
    return true
}
let names = startWhithM(['Maria', 'Mol', 'Manuel'])
console.log(names)