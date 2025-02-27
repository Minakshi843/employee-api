const express = require("express");
const app = express();
const csvRoute = require("./csvRoute"); // Import the correct route file

app.use("/get-data", csvRoute); // Use the router

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
