function displayGreeting() {
    let name = document.getElementById("nameInput").value.trim();
    let greetingText = document.getElementById("greeting");

    if (name === "") {
        greetingText.textContent = "Please enter your name!";
        greetingText.style.color = "red";
    } else {
        greetingText.textContent = `Hello, ${name}!`;
        greetingText.style.color = "black";
    }
}