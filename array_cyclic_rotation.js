// An  Array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place.
// the goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
// [Question]:write a function that returns the array A rotated K times.
//example [3,8,9,7,6] rotated 3 times
// 1st rotation [6,3,8,9,7]
// 2nd rotation [7,6,3,8,9]
// 3rd rotation [9,7,6,3,8]

// ofc we had edge cases to consider
// 1. if the array is empty or null we return the array

function solution(A, K) {

    function shiftArrayRight(A){//this function shifts the array to the right by one index
        let ArryLen = A.length;//get the length of the array
        let B = new Array(ArryLen);//create a new array with the same length as the original array to store the shifted array

        B[0] = A[ArryLen-1];//set the first element of the new array to be equal to the last element of the original array 
        for (let i=1; i<ArryLen; i++){//loop through the original array and set the elements of the new array to be equal to the elements of the original array starting from the second element of the original array
            B[i] = A[i-1];
        }
        return B//return the new array
    }

    if(A.length === 0 || A === null|| A === undefined){//check if the array is empty or null or undefined
        return A
    }

    for(let i=0; i<K; i++){//loop through the array and shift it to the right K times
        A = shiftArrayRight(A)
    }
    return A
}

console.log(solution([3,8,9,7,6], 3))