// ==================
// Part 1: Variables & Conditionals
// ==================
let userName = "Nickson"; // variable
let hour = new Date().getHours(); // current hour
let greeting;

if (hour < 12) {
    greeting = "Good Morning, " + userName + "!";
} else if (hour < 18) {
    greeting = "Good Afternoon, " + userName + "!";
} else {
    greeting = "Good Evening, " + userName + "!";
}

// Display greeting in the webpage
document.getElementById("greeting").textContent = greeting;

// ==================
// Part 2: Functions
// ==================
function showMessage() {
    alert("This is a custom message from a function!");
}

function calculateTotal(price, quantity) {
    return price * quantity; // reusable logic
}

console.log("Total cost:", calculateTotal(50, 3));

// ==================
// Part 3: Loops
// ==================
// Example 1: For loop
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 5; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = "Number " + i;
    numberList.appendChild(listItem);
}

// Example 2: While loop (countdown)
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown: " + countdown);
    countdown--;
}

// ==================
// Part 4: DOM Interactions
// ==================
let toggleBtn = document.getElementById("toggleBtn");

// 1. Add click event to toggle background color
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("bg-toggled");
});

// 2. Change text on click
toggleBtn.addEventListener("click", function() {
    document.getElementById("clickMessage").textContent =
        "Background color toggled!";
});

// 3. Create new element dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added using JavaScript!";
document.body.appendChild(newParagraph);
