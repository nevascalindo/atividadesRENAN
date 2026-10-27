import express from 'express';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    const num1 =Number(req.query.num1) 
    const num2 = Number(req.query.num2)

    res.send({soma: num1 + num2});
});

app.get('/api/pessoa/:id', (req, res) => {
    const id = Number(req.params.id);
    res.json({ 
        id: id, 
        message: "Hello World"})
});

// http://localhost:3000/api/ex1?num1=10&num2=2
app.get('/api/ex1', (req, res) => {
    const num1 =Number(req.query.num1) 
    const num2 = Number(req.query.num2)

    res.send({soma: num1 + num2});
});

// http://localhost:3000/api/ex2/45/30
app.get('/api/ex2/:valor/:hora', (req, res) => {
    const valor =Number(req.params.valor) 
    const hora = Number(req.params.hora)

    res.send({valor: valor * hora});
});

// http://localhost:3000/api/ex3?num1=80&num2=60&num3=75&num4=80&num5=70
app.get('/api/ex3', (req, res) => {
    const num1 =Number(req.query.num1) 
    const num2 =Number(req.query.num2) 
    const num3 =Number(req.query.num3) 
    const num4 =Number(req.query.num4) 
    const num5 =Number(req.query.num5) 
    
    res.send({média: (num1 + num2 + num3 + num4 + num5) / 5});
});

// http://localhost:3000/api/ex4/30
app.get('/api/ex4/:celsius', (req, res) => {
    const celsius =Number(req.params.celsius) 

    res.send({Fahrenheit: (9 * celsius + 160) / 5});
});

// http://localhost:3000/api/ex5/2
app.get('/api/ex5/:milhas', (req, res) => {
    const milhas = Number(req.params.milhas);
    const km = milhas * 1.60934;

    res.send({ Km: km });
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});