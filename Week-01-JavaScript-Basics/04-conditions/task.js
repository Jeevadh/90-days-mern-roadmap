// Write a JavaScript program that checks a user's login credentials using predefined variables instead of user input.

// Create a variable named username.
// If username is "Admin", then check another variable named password.
// If username is an empty string ("") or null, display "Canceled".
// If username is anything other than "Admin", display "I don't know you".

// Password validation:

// If password is "TheMaster", display "Welcome!".
// If password is an empty string ("") or null, display "Canceled".
// Otherwise, display "Wrong password".



// Using only if statements, write a program that checks the following conditions for three users:
let users = {
    user1 : { role: "Admin", password: "admin123" },
    user2 : { role: "User", password: "user123" },
    user3 : { role: "Guest", password: "" },
}
let currentUser1 = users.user1;
let currentUser2 = users.user2;
let currentUser3 = users.user3;

if(currentUser1.password === 'user123'){
    alert(`Welcome ${currentUser1.role}`);
} else {
    alert(`Access denied for ${currentUser1.role}`);
}

if(currentUser2.password === '' && currentUser2.role === 'User'){
    alert(`Welcome ${currentUser2.role}`);
}else {
    alert(`Access denied for ${currentUser2.role}`);
}

if(currentUser3.password === 'admin123' && currentUser3.role === 'Admin'){
    alert(`Welcome ${currentUser3.role}`);
}else {
    alert(`Access denied for ${currentUser3.role}`);
}





// Managing Reusability of code using objects and functions
let users = {
    user1 : { role: "Admin", password: "admin123" },
    user2 : { role: "User", password: "user123" },
    user3 : { role: "Guest", password: "" },
}

checkUserAccess(users)

function checkUserAccess(users) {
    for (const key in users) {
        let currentUser = users[key];
        if(currentUser.role === 'Admin' && currentUser.password === 'admin123'){
            alert(`Welcome ${currentUser.role}`);
    } else {
        alert(`Access denied for ${currentUser.role}`);
    }
}
}



