var age = 20
age = 65
console.log(age)

var username = "preshant"
var password = "techup"

var isMale = false
var isLoggedIn = false

var blog_posts = ["Today was a good day", "The sky is blue", "It's raining heavily now"]

console.log(username)
console.log(password)
console.log(isMale)
console.log(isLoggedIn)
console.log(blog_posts)

if (isMale == true) {
    console.log("You are male")
} else {
    console.log("You are not male")
}

while (age < 70) {
    console.log("Your age is " + age);
    age++
}

function sayHello() {
    alert("Hello everyone")
}

function showAge() {
    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    document.getElementById("header-age").textContent = user_input
}

function scrollToTop() {

    // Scroll to a point in the browser window, in this case it is 0px from the top
    // using a smooth scrolling animation
    window.scrollTo({ top: 0, behavior: "smooth" });
 }

function scrollToBottom() {
    // Scroll to a point in the browser window, in this case it is 0px from the top
    // using a smooth scrolling animation
    var height = window.innerHeight
    window.scrollTo({ top: height, behavior: "smooth" });
}