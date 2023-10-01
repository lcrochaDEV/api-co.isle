import { MongoClient } from "mongodb";

const DATABASE = process.env.CONECT_DATABASE;
const coIsleDB = new MongoClient(DATABASE);

let connectDataBase
  try {
    await coIsleDB.connect();
    const db = coIsleDB.db("CoIsle");
    connectDataBase = db.collection("CoIsleDataBase");

    console.log("Conectado ao banco de dados com sucesso!");
  } catch (erro) {
    console.log(`Erro de Conexão: ${erro}`);
  }
export default connectDataBase;
