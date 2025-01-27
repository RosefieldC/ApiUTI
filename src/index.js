import express from 'express';
import textFormatter from './util/text.js';
import calculator from './util/number.js';

const app = express();
const port = 3000;

app.use(express.json());

// Rota para transformar texto em minúsculas
app.post('/util/text/lowercase', (req, res) => {
    const { input } = req.body;
    const result = textFormatter(input, 'lowercase');
    res.send({ result });
});

// Rota para transformar texto em maiúsculas
app.post('/util/text/uppercase', (req, res) => {
    const { input } = req.body;
    const result = textFormatter(input, 'uppercase');
    res.send({ result });
});

// Rota para calcular o valor mínimo
app.get('/util/number/minimum', (req, res) => {
    const { input } = req.query;
    const values = input.split(',').map(Number);
    const result = calculator(values, 'minimum');
    res.send({ result });
});

// Rota para calcular o valor máximo
app.get('/util/number/maximum', (req, res) => {
    const { input } = req.query;
    const values = input.split(',').map(Number);
    const result = calculator(values, 'maximum');
    res.send({ result });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
