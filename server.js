const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/api/RainC2', (req, res) => {
    const { target, method, time } = req.body;

    console.log(`[LOG] Menerima Perintah Eksekusi:`);
    console.log(` -> Target : ${target}`);
    console.log(` -> Method : ${method}`);
    console.log(` -> Durasi : ${time} detik`);

    res.status(200).json({
        status: "success",
        message: "Instruksi diterima oleh backend",
        details: { target, method, time }
    });
});

app.listen(PORT, () => {
    console.log(`-----------------------------------------`);
    console.log(`🛡️ Network Resilience Lab Server Active`);
    console.log(`🌍 Akses URL: http://localhost:${PORT}`);
    console.log(`-----------------------------------------`);
});

