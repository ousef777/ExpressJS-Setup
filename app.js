const express = require("express");

const app = express();

app.get('/', function (req, res) {
    return res.json([
        {
            name: "Yousef Alfaili"
        }
    ]);
})

app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
});