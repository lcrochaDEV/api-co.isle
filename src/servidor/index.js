import express from 'express';
import 'dotenv/config';
import '../conect-data/conectDB.js';
import connectDataBase from '../roteamento/rotas.js';
import cors from 'cors';

const HOST = process.env.SERVER_IP;
const PORT = process.env.SERVER_PORT || 3000;
// App
const app = express();
app.use(express.json());
// Cors
app.use(cors({
  origin: '*' 
}));

app.get('/', (req,  res) => {
  res.send('Página Home');
});

app.use("/home", connectDataBase);

app.listen(PORT, HOST, () => {
  console.log(`Servidor executando na URL http://${HOST}:${PORT}`);
});