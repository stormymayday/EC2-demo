const express = require("express");
const app = express();
const port = 5100;

app.get("/", (req, res) => {
    res.send("Hello World from AWS EC2!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});