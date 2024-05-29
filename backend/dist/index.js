"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express_1.default.json());
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
