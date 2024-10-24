function drawTriangle(triangleSize) {
console.log("*");
console.log("**");
console.log("***");
console.log("****");
for (let i = 0; i < triangleSize; i++) {
    let stars = ""; 
    for (let j = 0; j <= i; j++) {
        stars += "*"; 
    }
    console.log(stars); 
}
}

console.log("Testing drawTriangle()..."); 

drawTriangle(4); 

export default drawTriangle; 