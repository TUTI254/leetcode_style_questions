/* A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
For example, array A such that:
A[0] = -3    A[1] = 1    A[2] = 2    A[3] = -2    A[4] = 5    A[5] = 6
contains the following example triplets:
(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.
Write a function:that, given a non-empty array A, returns the value of the maximal product of any triplet.
as used in above example where it returns 60 as the maximal product of any triplet  (2, 4, 5), product is 2 * 5 * 6 = 60

Write an efficient algorithm for the following assumptions:
N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].

*/
//this is a sorting problem

//so what can we do?
//1: we can sort the array in ascending order
//2: then we can get the product of the first 2 numbers and the last number
//3:then we can get the product of the last 3 numbers
//4: then we can return the greater of the 2 products

//it has a time complexity of O(nlogn) since we are sorting the array first


function solution(A) {
    let length = A.length-1;//get length of array A and subtract 1 to get the last index
    A.sort((a,b)=>a-b);//sort array A  using the sort method and a compare function to sort in ascending order
    let ans1 = A[0] * A[1] * A[length];//get the product of the first 2 numbers and the last number
    let ans2 = A[length] * A[length-1] * A[length-2];//get the product of the last 3 numbers

    return ans1>ans2 ? ans1 : ans2;//return the greater of the 2 products
}