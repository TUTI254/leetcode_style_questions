// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, 
// and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

// For example, in array A such that:
//  A= [9, 3, 9, 3, 9, 7, 9]
//  the elements at indexes 0 and 2 have value 9,
//  the elements at indexes 1 and 3 have value 3,
//  the elements at indexes 4 and 6 have value 9,
//  the element at index 5 has value 7 and is unpaired.

// Write a function:that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
// Write an efficient algorithm for the following assumptions: N is an odd integer within the range [1..1,000,000];
// each element of array A is an integer within the range [1..1,000,000,000]; all but one of the values in A occur an even number of times.

// solution
//time complexity: O(N)// since we are iterating through the array
// iterate through the array
// store the value, and if a particular value is already stored, remove it from the storage
// return the only value left in the storage
// ** we can use a hash table to store the values since we need to store the values and remove them


function solution(A) {
    let storage = {};// create a storage
    for (let i = 0; i < A.length; i++) {// iterate through the array and store the values
        if(!storage.hasOwnProperty(A[i]) || storage[A[i]] === 0)storage[A[i]] = 1 ;// if the value is not in the storage, add it to the storage
        else storage[A[i]] = 0;// if the value is already in the storage, remove it from the storage
    }
    for (let key in storage) {// iterate through the storage and return the value that is left in the storage
        if(storage.hasOwnProperty(parseInt(key))){// check if the key is an integer
            if(storage[parseInt(key)] === 1) {// check if the value is 1
                return parseInt(key);
            }
        }
    }
}

// test case
console.log(solution([9, 3, 9, 3, 9, 7, 9]));// 7
