# Portal Para Colaboradores do Grupo Rosa Maria

Este projeto, Portal Grupo RM, foi pensado e centrado para funcionários ativos do grupo rosa maria. Tem como objetivo centralizar o feedback do grupo, fazendo com que facilite o retorno do mesmo para com o grupo.

---

## Instruções:

Pré-requisito: 

### Node.js
    Instale as dependências para rodar em ambiente local: 
        - npm i express mongodb mongoose bcrypt cors crypto dotenv jsonwebtoken nodemon

    Para iniciar o projeto localmente, digite **npm run dev**

---

## Configurações:

- O projeto é envolto por CRUD puro, ou seja, a grande parte das rotas são para criar, ler, atualizar ou deletar dados, a grande diferença seria que para metodos GET, PUT e DELETE é preciso acesso de administrador, um usuario normal não será autorizado para tais metodos em algumas rotas, tais como criação de sugestão, elogio e criticas.
- A rota de usuario tem como criar um usuario admin, autenticar usuario e alterar a senha.

- **Leia ATENTAMENTE e ESTUDE o código antes de fazer qualquer alteração**

---

## Rotas:

- Listagem de Rotas/Endpoints disponiveis:

    - Feedbacks:
        - GET */feedbacks/* => Pega todas as feedbacks
        - GET */feedbacks/:id* => Pega feedbacks pelo id passado como parametro
        - POST */feedbacks/* => Inclui feedbacks
        - PUT */feedbacks/:id* => Atualiza feedbacks conforme id passado como parametro
        - DELETE */feedbacks/:id* => Deleta feedbacks conforme id passado como parametro

    ---

    - Cardapio:
        - GET */cardapios/* => Pega todas as cardapios
        - GET */cardapios/:id* => Pega cardapio pelo id passado como parametro
        - POST */cardapios/* => Inclui cardapio
        - PUT */cardapios/:id* => Atualiza cardapio conforme id passado como parametro
        - DELETE */cardapios/:id* => Deleta cardapio conforme id passado como parametro

    ---

    - Role:
        - GET */roles/* => Pega todas as roles
        - POST */roles/* => Inclui role
        - PUT */roles/:id* => Atualiza role conforme id passado como parametro
        - DELETE */roles/:id* => Deleta role conforme id passado como parametro

    ---

    - Usuario:
        - POST */login/* => Faz a validação de autenticação de usuario
        - POST */cadastro-usuario/* => Inclui um usuario admin
        - PUT */resete-senha/* => Altera a senha do usuario

    ---

## Licença:

Este projeto é licenciado sob a Licença MIT - segue arquivo [LICENSE](LICENSE)
