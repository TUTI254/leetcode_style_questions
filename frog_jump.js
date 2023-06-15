/* A small frog wants to get to the other side of the road. 
The frog is currently located at position X and wants to get to a position greater than or equal to Y. 
The small frog always jumps a fixed distance, D.
Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:
given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
For example, given: X = 10  Y = 85 D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.

*/

//what do we know?
//we know that the frog starts at position X
//we know that the frog wants to get to position Y
//we know that the frog jumps a fixed distance D

//what do we need to find out?
//we need to find out the minimal number of jumps that the frog must perform to reach its target

//Do we have any edge cases?
// the frog can jump to the exact position of Y
// the frog can jump past the position of Y

//It has a time complexity of O(1) and a space complexity of O(1) because we are only using 3 variables

//what are our steps?
// 1: Y-X/D = number of jumps
// 2: if Y-X/D has a remainder, add 1 to the number of jumps

function frogJump(X, Y, D) {
    let jumps = parseInt((Y - X) / D);// get the number of jumps needed and make it an integer
    if ((Y - X) % D !== 0 && (Y - X) > D){// if there is a remainder and the distance is greater than the jump distance
        jumps++;//add 1 to the number of jumps
    }
    return jumps;
}


