const express = require('express');
const app = express();
const port = 3000;

// Simulate a database or session tracking
const userSessions = {};

app.use(express.json()); // For parsing application/json

// Serve the frontend files (HTML, CSS, etc.)
app.use(express.static('public'));

// Endpoint to verify ad completion
app.post('/verify-ad-completion', (req, res) => {
    const { userId } = req.body;

    if (userSessions[userId] && userSessions[userId].adWatched) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Simulate the ad interaction by marking the ad as watched
app.get('/watch-ad/:userId', (req, res) => {
    const { userId } = req.params;
    userSessions[userId] = { adWatched: true }; // Mark ad as watched
    res.send('Ad interaction confirmed.');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at https://cyangithub2011.github.io/binhub/index.html:${port}`);
});
