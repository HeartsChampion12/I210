function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes("password")) {
        return false; 
    }
    if (password.toLowerCase() === password) {
        return false; 
    }
    return true; 
}

console.log("Testing isStrongPassword()...")

console.log("Qwerty -" + isStrongPassword("Qwerty")); 
console.log("passwordQwerty -" + isStrongPassword("passwordQwerty")); 
console.log("qwerty123 -" + isStrongPassword("qwerty123")); 
console.log("Qwerty123 -" + isStrongPassword("Qwerty123")); 