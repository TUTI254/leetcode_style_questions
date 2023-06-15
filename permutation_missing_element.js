/**  An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.

Write a function:
that, given an array A, returns the value of the missing element.

For example, given array A such that: A[ 2, 3, 1, 5 ]
  A[0] = 2 A[1] = 3 A[2] = 1  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

//The time complexity of this solution is O(n) since we are looping through the array

//we can solve this using guass formula
// (Arraylength+1)*(Arraylength+2)/2 - we will get the sum of all the numbers in the array
// then we will subtract the sum of the array from the above formula to get the missing number

function solution(A) {
    let length = A.length;//length of the array
    let sum = (length+1)*(length+2)/2;//sum of all the numbers in the array
    let truesum = 0;//sum of the array
    for(let i=0; i<length; i++){//loop through the array and get the sum of the array 
        truesum += A[i];//sum of the array
    }
    return sum - truesum;//return the missing number
}