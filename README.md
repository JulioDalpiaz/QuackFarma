Como as dependência já estão presentes nos package.json basta dar um
npm install,
o node deve ler o que está no package.json e instalar pra você o {
    sequelize
    pg
    pg-htore
    dotenv
}

Para criar os containers no docker use o seguinte comando: docker-compose up --build -d.
Para acessar a home vá para o link localhost:3001;

Vá para a porta 5050 para configurar o banco de dados (precisa estar com o pg admin rodando no computador)
Login: admin@admin.com Senha: admin
É necessário adicionar um servidor, para isso insira qualquer nome na aba "geral", na aba "Connection" insira no "Host name/adress": fullstrackapplean-db-1;
a porta é 5432; o "Maintance database" e o "Username": postgres; e a senha é 3240.
