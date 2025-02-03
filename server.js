const express = require('express');
const app = express();

// Function to get a cheerful message based on the day of the week
function getDayMessage() {
    const dayMessages = {
        Sunday: "Relax and recharge for the week ahead! 😊",
        Monday: "Happy Monday! Start your week with energy! 💪",
        Tuesday: "Keep going! You're doing great! 🚀",
        Wednesday: "Halfway through the week! Stay motivated! ✨",
        Thursday: "Almost there! Keep pushing forward! 🔥",
        Friday: "It's Friday! The weekend is near! 🎉",
        Saturday: "Enjoy your weekend! Have fun! 😃"
    };

    const today = new Date().getDay()
    return dayMessages[today] || "Have a wonderful day!";
}

// Define the API endpoint
app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name;

    if (!userName) {
        return res.status(400).json({ error: "Please provide a name in the query parameter." });
    } 

    const personalizedGreeting = `Hello, ${userName}! Welcome to our assistant app!`;
    const dayMessage = getDayMessage();

    res.json({
        welcomeMessage: personalizedGreeting,
        dayMessage: dayMessage
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});