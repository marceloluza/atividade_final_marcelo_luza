# Lista de Compras - Projeto de CRUD com Node.js, Angular e MongoDB

## Descrição
A aplicação **Lista de Compras** é um sistema que permite criar, listar, atualizar e excluir listas de compras e seus respectivos itens. É uma solução simples e eficiente para gerenciar suas compras de forma organizada e intuitiva.

## Funcionalidades
- **CRUD de Listas de Compras:** Criação, leitura, atualização e exclusão de listas.
- **CRUD de Itens:** Gerenciamento de itens dentro de cada lista, incluindo o status "pendente" ou "comprado".
- **Marcar como Comprado:** Possibilidade de alterar o status dos itens.
- **Validações:** Impede a criação de itens com nomes vazios ou contendo apenas números.

## Tecnologias Utilizadas
### Backend:
- **Node.js** com **Express.js** para construção do servidor.
- **MongoDB** para armazenamento dos dados.
- **Mongoose** para modelagem e manipulação do banco de dados.
- **Body-parser** e **CORS** para middleware.

### Frontend:
- **Angular** para interface de usuário dinâmica e responsiva.
- **Bootstrap** para estilização.

### Containerização:
- **Docker** com **docker-compose** para facilitar a configuração e execução do projeto.

## Estrutura do Projeto
- **Backend:** Localizado em `src/`, gerencia APIs RESTful para listas e itens.
- **Frontend:** Localizado em `src/app/`, oferece uma interface amigável e responsiva.
- **Banco de Dados:** Configurado no MongoDB.
- **Docker:** Arquivo `docker-compose.yml` e `Dockerfile` para execução em contêiner.

## Instalação
### Requisitos:
- Node.js (v14 ou superior)
- Angular CLI
- Docker e Docker Compose

### Passos:
1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   cd lista-de-compras
   ```
2. Instale as dependências do backend e frontend:
   ```bash
   npm install
   ```
3. Inicie o projeto com Docker:
   ```bash
   docker-compose up --build
   ```

## Endpoints
- **Listas:**
  - GET `/api/lists`
  - POST `/api/lists`
  - PUT `/api/lists/:id`
  - DELETE `/api/lists/:id`

- **Itens:**
  - GET `/api/items?listId=:listId`
  - POST `/api/items`
  - PUT `/api/items/:id`
  - DELETE `/api/items/:id`

## Autor
**Marcelo Luza**

## Licença
Este projeto é licenciado sob a Licença MIT.

