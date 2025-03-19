const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ data: 'Hello World!', from: 'Rickyslash' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
