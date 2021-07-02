const age = prompt("Enter your age:");
if (age<5 || age>=65) {
    console.log("it's FREE !!")
}
else if (age<10) {
    console.log("Pay:10$")
}
else if (age<65) {
    console.log("Pay:20$")
}