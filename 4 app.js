const password = prompt("Enter the Password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Strong Password")
}
else {
    console.log("Password Error!!")
}