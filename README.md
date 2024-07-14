Clone este repositório para sua pasta de trabalho
Abra o terminal na pasta e rode um dos seguintes: <br>
    docker compose up <br>
    OU <br>
    docker-compose up --build <br>
No windows talvez precise usar o com --build <br>
E no linux, dependendo da configuração, coloque o sudo antes :)
    
O docker ira dar pull nas imagens e iniciar 2 containers:<br>
servidor e postgres.
Espere todos os 2 estarem prontos, observe se entre tudo que aparece no terminal apareceu: <br>
    db-1       | 2024-07-14 18:19:29.883 UTC [1] LOG:  database system is ready to accept connections <br>
    web-1      | Servidor rodando em http://0.0.0.0:3000 <br>

Após isso: <br>
Para acessar a página de testes va para http://localhost:3001. <br>
Há 4 rotas para teste (ou 5 se contar a '/', que mostra os formulários): <br>
http://localhost:3001/insert <br>
http://localhost:3001/select <br> 
http://localhost:3001/update <br>
http://localhost:3001/delete
