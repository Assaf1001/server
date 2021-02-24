const express = require("express");
const cors = require("cors");
const path = require("path");

const publicDir = path.join(__dirname, "../public");

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static(publicDir));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
    console.log(`Server is connected, Port:`, port);
});
