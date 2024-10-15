function getCircleArea(radius) {
    if (radius) {
        console.log(radius * radius * Math.PI); 
    }
}

getCircleArea(2);
getCircleArea(4);
getCircleArea(8);
getCircleArea(3);
getCircleArea();

function convertInchToFeet() {
    const inches = document. 
    getElementById("inches").value; 
    const calcFeet = inches/12; 
    const feetText = `Feet: ${calcFeet.toFixed(2)}`; 
    document.getElementById("feet").innerHTML = feetText;
}