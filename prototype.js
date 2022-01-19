let arr = [1, [2], 3, '22', 5, [5, 2, [1, 2, 8, 6], 89, 25, [2], 5, [23, 3, 121], 32]]


const function1 = (arr) => {

    let sum = 0

    arr.forEach(el => typeof el === 'number' ? sum += el : sum += function1(el))

    return sum
}


// console.log(function1(arr))


console.log(arr.includes('22'))


