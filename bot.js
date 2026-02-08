/* 🔐 AUTH GUARD — MUST BE AT TOP */
const name = localStorage.getItem("campusUser");

if (!name) {
    // If user reaches bot page without login
    window.location.replace("login.html");
}

/* 👤 SHOW USER NAME */
document.getElementById("userName").textContent = name;

const chatBox = document.getElementById("chat-box");

/* 🤖 WELCOME MESSAGE */
window.onload = function() {
    botReply(`Hi ${name}! 👋  
I can guide you across the campus.

You can ask:
• I am in CSE department
• Where is the library?
• How to reach hostel?
• Where is the canteen?`);
};

/* 💬 CHAT LOGIC */
function sendMessage() {
    const inputBox = document.getElementById("userInput");
    const input = inputBox.value.toLowerCase().trim();
    if (!input) return;

    userReply(input);

    let reply = "";

    if (input.includes("cse")) {
        reply = "📍 From CSE Department, go straight and take a left. The Library is beside the Admin Block.";
    } else if (input.includes("library")) {
        reply = "📚 The Library is next to the Admin Block. From Main Gate, go straight and turn right.";
    } else if (input.includes("hostel")) {
        reply = "🏠 Hostels are behind the Sports Ground. From Academic Block, take a left and walk for 5 minutes.";
    } else if (input.includes("canteen")) {
        reply = "🍽️ The Canteen is beside the Auditorium, near the parking area.";
    } else {
        reply = "🤖 I can help with campus directions like departments, library, hostel, and canteen.";
    }

    setTimeout(() => botReply(reply), 400);
    inputBox.value = "";
}

function userReply(msg) {
    chatBox.innerHTML += `<div class="msg user">You: ${msg}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(msg) {
    chatBox.innerHTML += `<div class="msg bot">Bot: ${msg}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}

/* 🌗 LIGHT / DARK MODE */
function setMode(mode) {
    document.body.className = `bot-body ${mode}`;
}