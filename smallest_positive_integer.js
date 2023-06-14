// given an array A of N integers, return the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

function smallest_positive_integer(A) {
    let counter = 0;//create a counter variable
    A.sort(function (a, b) {return a - b});//sort the array in ascending order  [1, 1, 2, 3, 4, 6]
    for (let i = 0; i < A.length; i++) {//loop through the array 
        if (A[i] > 0) {//if the number is positive and greater than 0 
            if (A[i] !== counter) counter++;// if the number is not equal to the counter increment the counter by 1
            if (A[i] === counter) continue;// if the number is equal to the counter continue
            return counter;
        }
    }
    counter++;//if the array is empty or all the numbers are negative increment the counter by 1
    return counter;
}

console.log(smallest_positive_integer([1, 3, 6, 4, 1, 2]));//