import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to Database
// sequelize
//   .authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch((err) => console.log("Error: " + err));

// define routes
// app.use('/api/users', require('./routes/users'))
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api", (req, res) => {
  res.send("hello API something else");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
