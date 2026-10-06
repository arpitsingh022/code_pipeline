const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Node Pipeline Project 🚀</h1>
        <p>Docker + GitHub Actions + GHCR + Docker Hub</p>
        <p>Deployment successful!</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
