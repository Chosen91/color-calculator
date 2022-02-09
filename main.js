const prompt = require('prompt-sync')()

//Message to user asking if they intend to combine or deconstruct colors.

let option = Number(prompt("Enter number 1 to combine colors. Enter number 2 to breakdown colors: "))


if (option === 1){
    console.log("Colors available red blue and yellow")

let color1 =prompt("Enter Color one: ");

let color2 =prompt("Enter color two: ");

if (color1 === "red"  && color2 === "blue" || color1 === "blue" && color2 === "red"){
    console.log("purple");
}else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){
    console.log("orange");
}else if (color1 === "yellow" && color2 === "blue" || color1 === "blue" && color2 === "yellow"){
    console.log("green");
}else {console.log("Error ");
}
}else if (option === 2){
    console.log("Colors avaibable purple orange and green")
 
let color3 =prompt("Enter Color to Deconstruct: ");

if (color3 === "purple"){
    console.log("red and blue")
}else if (color3 === "orange"){
    console.log("red and yellow")
}else if (color3 === "green"){
    console.log("yellow and blue")
}else {console.log("Error");
}
}