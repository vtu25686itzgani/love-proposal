const noBtn = document.getElementById("noBtn");
const username = localStorage.getItem("username");

document.getElementById("userDisplay").innerText = "Hey " + username + " 💕";

// YES CLICK
function sayYes() {
    document.getElementById("response").innerText = 
        "Aww 🥺 Thank you! Love you more 💖...";

    saveResponse("Yes");
}

// NO BUTTON ESCAPE (works on desktop + mobile)
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", moveNoButton);

// If somehow clicked
noBtn.addEventListener("click", () => {
    saveResponse("No");
});