//Write a function that, given an array A consisting of N integers, returns the number of distinct values in array A.
//For example, given array A consisting of six elements such that: A[ 2, 1, 1, 2, 3, 1 ]
// A[0] = 2    A[1] = 1    A[2] = 1 A[3] = 2    A[4] = 3    A[5] = 1
//the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.
//Write an efficient algorithm for the following assumptions:
//N is an integer within the range [0..100,000];
//each element of array A is an integer within the range [−1,000,000..1,000,000].

//what can we do? 
//we can loop through the array and store the distinct numbers in an object
//then we can return the length of the object
//we can also use a counter to count the distinct numbers
// we can also check if the number is already in the object before adding it to the object

// it has a time complexity of O(n) since we are looping through the array once


function solution(A) {
    let distinctNums = {};//object to store distinct numbers
    let distinctNumsCounter = 0;//counter for distinct numbers
    for(let i= 0; i<A.length; i++){//loop through array A
        let currentNum = A[i];//get current number from array
        if(distinctNums[currentNum]!=1){//check if current number is already in distinctNums object
            distinctNums[currentNum] = 1;//if not, add it to distinctNums object
            distinctNumsCounter++//increment distinctNumsCounter
        }
    }
    return distinctNumsCounter;
}


//test case
console.log(solution([6, 6, 1, 2, 31,2,31])); //4=>  [1,2,6,31]