# API Para Requisições(CRUD) em Banco de Dados MongoDB

#### Criando Banco de dados Mango DB

sudo docker run --name mongoDB -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo

#### Acesso ao mongo
sudo docker exec -it mongoDB mongosh -u admin -p admin

#### Comando Docker para iniciar contêiner automaticamente.

sudo docker update --restart always mongoDB

### Primeiro POST no Mondo DB

´´´json
{
    "nome" : "CAMISA POLO",
    "valor" : "50,00",
    "tamanhos" : "G",
    "cor" : "",
    "disponivel" : "40",
    "src" : "https://6239028l.ha.azioncdn.net/img/2022/08/produto/4190/happy-winter-22-21389-1.jpg?ims=fit-in/614x819/filters:fill(white)"
    
}
´´´