function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
}
var numeros = hasEven([3, 1, 7, 5, 9, 15, 21, 25, 35, 45, 75, 80]);
console.log(numeros);
function startWhithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] !== 'M') {
            return false;
        }
        i++;
    }
    return true;
}
var names = startWhithM(['Maria', 'Marta', 'Manuel']);
console.log(names);
