const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const router = express.Router();

// Define the route
router.get("/", async (req, res) => {
  try {
    // Read the JSON file
    const data = await fs.readFile(path.join(__dirname, "final_employee_data.json"), "utf-8");
    
    // Parse JSON and send as response
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
