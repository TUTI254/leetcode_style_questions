// identify the largest binary gap in a given integer/number 
// eg = 1041 -> 10000010001 // 
// it has a binary gap of 5 and 3  
// 5 is the largest binary gap

//there are edge cases to consider in this problem where we would return 0
// 1. if the number is 0 eg a binary of 00000 has no binary gap
// 2. if the number is 1 eg a binary of 11111 has no binary gap

// we can use pointers to solve this problem the left pointer(i) representing the start and the second pointer (j)will increament from the position of (i) until it finds a 1
//when ever i and j == 1 and there are zero's btwn them we store the gap then we set i to be equal to j to continue the process until the end of the binary number (we store that gap as well) which is the length of the binary number
//to get the stored gaps (j-i-1) we subtract 1 from the difference because the pointers are pointing to 1's and we want the gap between them


function solution(N) {

    let binary = N.toString(2)//convert the number to binary
    console.log(binary)
    let maxGap = 0

    for(let i=0; i<binary.length; i++){//loop through the binary number and check for 1's
        for(let j=i+1; j<binary.length; j++){//loop through the binary number and check for 1's after the first 1
            if(binary[i] === '1' && binary[j] === '1'){//if we find 1's we check if there are zero's between them and store the gap
                if(maxGap<j-i-1){//if the gap is greater than the previous gap we store it
                    maxGap = j-i-1;
                }
                i = j//we set i to be equal to j to continue the process until the end of the binary number (we store that gap as well) which is the length of the binary number
            }
        }
    }
    return maxGap
}

console.log(solution(1041))