// given an array A of N integers, return the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//so what do we know ?
// 1: smallest +(ve) num > 0
// 2 :smallest '' is not in the array

//so what can we do ?
//1: we can sort the array in ascending order
//2:then loop array & check if the num is == +(ve) and > 0
//3: if num is +(ve) && > 0 ;check if num is  == counter variable
// 4: if (num !== counter){counter ++}
//5: if num === to counter we just continue
//6: if array is empty we assume its nums are -(ve) and we increment by 1
//7: return the counter


function solution(A) {
    // Implement your solution here
    let counter = 0 ;
    //sort array in asc
    A.sort(function(a,b){
        return a-b
    })
    //loop through array
    for (let i = 0; i<A.length; i++){
       //check if num is +(ve) and  is > 0
        if(A[i]>0){
            if(A[i] !== counter) counter++;
            if(A[i] === counter) continue;
            return counter;
        }
    }
    //if array is empty or nums are -(ve)
    counter ++

    return counter
}
