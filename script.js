const messages = [
    "Hai, PacallNya Arippp! 😘",
    "Aku cuma mau bilang...",
    "Aku sayang banget sama ayang! ❤️",
    "Setiap hari bersama ayang adalah hadiah terindah.",
    "Terima kasih sudah ada di hidupku.",
    "Selamat malam yang indah! 🌟",
    "Aku selalu ada untukmu, apapun yang terjadi.",
    "Ayangg adalah segalanya bagiku. 😍",
    "I love you. 💕❤️❤️❤️😘"
];

let messageIndex = 0;
const messageElement = document.getElementById('message');

function displayNextMessage() {
    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];
        messageIndex++;
    } else {
        messageIndex = 0; // Reset to start
    }
}

setInterval(displayNextMessage, 3000); // Change message every 3 seconds
