import conctDataBase from "../conect-data/conectDB.js";
import { ObjectId } from "mongodb";

class Rotas {
  static async methodGet(req, res){ //GET OK
    try {
      const id = req.params.id;
      const ObjectIdDB = new ObjectId(req.params.id);
      if (id) {
          const data = await conctDataBase.findOne({'_id':ObjectIdDB});
          res.status(200).json(data); 
        }else{
          const data = await conctDataBase.find({}).toArray();
          res.status(200).json(data);       
        }
      }
      catch(error){
        res.status(500)
        res.send({mensagem: error.message})   
      }
    };
    static async methodPost (req, res) { //POST OK
      try {
        const data = await conctDataBase.insertOne(req.body);
        res.status(201).json({ message: "Criado com sucesso"});
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - Falha ao cadastrar` });
      }
    }
    static async methodPetch(req, res){
      try {
        const ObjectIdDB = new ObjectId(req.params.id);
        console.log(ObjectId)
        await conctDataBase.findOneAndUpdate({'_id':ObjectIdDB}, { $set:req.body });
        res.status(200).json({ message: "Dados atualizados com sucesso!" }); 
      } catch (error) {
        res.status(500).json({ message: `${error.message} - Falha na atualização` });
      }
    };
    static async methodDelete(req, res) { //DELETE OK
      try {
        const ObjectIdDB = new ObjectId(req.params.id);
        console.log({'_id':ObjectIdDB})
        await conctDataBase.findOneAndDelete({'_id':ObjectIdDB});
        res.status(200).json({ message: "Dados excluídos com sucesso" });
      } catch (erro) {
        res.status(500).json({ message: `${erro.message} - Falha ao Deletar` });
      }
    };
  }
export default Rotas;