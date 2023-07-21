function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
        i++;
    }
}
var numeros = hasEven([3, 1, 7, 5, 9]);
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
var names = startWhithM(['Maria', 'Mol', 'Manuel']);
console.log(names);
