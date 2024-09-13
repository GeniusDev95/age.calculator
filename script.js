let age = Number(prompt("Enter your age"));


if(isNaN(age)){
    alert("Please enter a valid number")
}
else if(age >= 65){
    alert("You are classified as a Senior")
}
else if(age >= 20){
    alert("You are classified as an Adult")
}
else if(age >= 13){
    alert("You are classified as a Teenager")
}
else if(age >= 0){
    alert("You are classified as a Child")
}
