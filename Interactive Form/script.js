// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let binaryN;
    binaryN = N.toString(2);
    binaryN = binaryN.split("")
    let newArray = binaryN.filter( element => element == 0 )
    console.log(newArray)
    for (i = 0; i < binaryN.length; i++) {
        
        
        
    }
    
    
    return binaryN;
}
console.log(solution(1041))