const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/my-frontend-angular"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/my-frontend-angular/index.html"));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 4200;
app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
