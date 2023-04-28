"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3000;
const jsonsDir = path_1.default.join(__dirname, '../bnbTigerNFTJson');
app.get('/', (req, res) => {
    res.send('API Is Working!!');
});
// Serve static files from the jsons directory
app.use(express_1.default.static(jsonsDir));
// GET /json/:filename - Get a specific JSON file by filename
app.get('/json/:filename', (req, res) => {
    const filename = req.params.filename;
    const filepath = path_1.default.join(jsonsDir, filename);
    res.sendFile(filepath);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
