# Finance API Node

Este projeto é uma API financeira desenvolvida em Node.js. A API permite gerenciar transações financeiras, consultar saldos e gerar relatórios.

## Funcionalidades

- Cadastro de transações financeiras (receitas e despesas)
- Geração de relatórios financeiros
- 

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- graphql
- express-graphql
- express
- redis
- docker

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/financial-control.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd finance_api_node
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    MONGODB_URI=sua_uri_mongodb
    PORT=4000
    ```

2. Suba o container com o mongodb e o redis:

    ```bash
    docker-compose up -d
    ```

## Uso

1. Inicie o servidor:
    ```bash
    npm start
    ```
2. Acesse a API em `http://localhost:4000`.

## Endpoints



## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
