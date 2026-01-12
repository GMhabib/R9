const express = require('express');
const app = express();

// Middleware untuk membaca JSON
app.use(express.json());

module.exports = (req, res) => {
    // Menangani request POST ke /api/RainC2
    if (req.method === 'POST') {
        const { target, method, time } = req.body;

        console.log(`[LOG] Menerima instruksi pengujian:`);
        console.log(`Target: ${target}`);
        console.log(`Metode: ${method}`);
        console.log(`Durasi: ${time} detik`);

        // Di sini biasanya diletakkan logika backend/cluster.
        // Karena ini lingkungan serverless, kita mengirimkan respons sukses segera.
        
        return res.status(200).json({
            status: "success",
            message: "Instruksi diterima oleh kluster backend",
            data: { target, method, time }
        });
    } 

    // Jika diakses via GET atau metode lain
    return res.status(405).json({ error: "Method not allowed" });
};

