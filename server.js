const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // v2 if you're on CommonJS

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/translate', async (req, res) => {
    const { q, source, target } = req.body;

    try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=${source}|${target}`;
        const response = await fetch(url);
        const data = await response.json();

        const translatedText = data?.responseData?.translatedText || "[Translation error]";
        res.json({ translatedText });
    } catch (err) {
        res.status(500).json({ error: 'Translation failed', details: err.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`🟢 Proxy server running at http://localhost:${PORT}`);
});
