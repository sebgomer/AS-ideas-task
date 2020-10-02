const express = require("express"); 
const path = require("path"); 

const app = express(); 

//whenever static as keyword, it serves the path as per usual
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// SPA no matter what path is taken:
// redirect index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 5060, () => console.log("Server sprintet ..."));