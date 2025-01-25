# API-NodeJS
<a href="" target="_blank"><img src="https://img.shields.io/badge/status-concluído%20-green"></a>

Este projeto é uma API desenvolvida em Node.js utilizando Express e Knex.js para gerenciamento de banco de dados. A API fornece funcionalidades para gerenciar usuários, autenticação, notas e tags.

## Tecnologias Utilizadas

- **Node.js** - Runtime para JavaScript no servidor.
- **Express** - Framework para criação de APIs REST.
- **Knex.js** - Query Builder para interagir com o banco de dados.
- **SQLite** - Banco de dados utilizado na aplicação.
- **JWT** - Para autenticação de usuários.
- **Multer** - Para upload de arquivos.

## Como Executar o Projeto

### 1. Clonar o Repositório
```sh
git clone <URL_DO_REPOSITORIO>
cd API-NodeJS-master
```

### 2. Instalar Dependências
```sh
npm install
```

### 3. Configurar as Variáveis de Ambiente
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis conforme necessário.

### 4. Rodar as Migrações do Banco de Dados
```sh
npm run migrate
```

### 5. Iniciar o Servidor
```sh
npm start
```
O servidor será iniciado na porta definida no `.env`, geralmente `http://localhost:3333`.

## Endpoints Disponíveis

### Autenticação
- `POST /sessions` - Autentica um usuário e retorna um token JWT.

### Usuários
- `POST /users` - Cria um novo usuário.
- `GET /users/:id` - Obtém informações de um usuário.
- `PUT /users/:id` - Atualiza dados do usuário.

### Notas
- `POST /notes` - Cria uma nova nota.
- `GET /notes/:id` - Obtém uma nota específica.
- `DELETE /notes/:id` - Remove uma nota.

### Tags
- `GET /tags` - Retorna todas as tags cadastradas.

### Uploads
- `PATCH /users/avatar` - Faz upload da foto de perfil do usuário.

## Contribuição
1. Fork este repositório.
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Adicionando nova funcionalidade'`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo conforme necessário.
