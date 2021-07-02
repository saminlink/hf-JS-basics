const password = prompt("please enter your password");

// password must be 6+ characters
// if (password.length >= 6) {
//     console.log("LONG ENOUGH PASSWORD")
// }
// else {
//     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
// }

// password can not include space
// if (password.indexOf(' ') === -1 ) {
//     console.log ("Good job! No space!")
// }
// else {
//     console.log("Oo! An error occured.")
// }

if (password.length >= 6) {
    if (password.indexOf(' ') === -1 ) {
        console.log ("Vaid password!");
    }
    else {
        console.log("Oo! An error occured.");
    }
}
else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}