Clone este reposittório para sua pasta de trabalho
Aba o terminal na pasta e rode um dos seguintes
    docker compose up
    OU
    docker-compose up --build
No windows talvez precise usar o com --build
E no linux, dependendo da configuração, coloque o sudo antes :) 
    
O docker ira dar pull nas imagens e iniciar 3 containers
servidor, postgres e pgadmin
Espere todos os 3 estaram prontos, observe se entre tudo que aparece no terminal apareceu:
    db-1       | 2024-07-14 18:19:29.883 UTC [1] LOG:  database system is ready to accept connections
    web-1      | Servidor rodando em http://0.0.0.0:3000
    pgadmin-1  | [2024-07-14 18:20:20 +0000] [117] [INFO] Booting worker with pid:

O pgadmin deve demorar mais e ser o ultimo a aparecer, e depois disso:
Para acessar a página de testes va para http://localhost:3001
Há 4 rotas para teste (ou 5 se contar a '/', que mostra os formulários)
http://localhost:3001/insert
http://localhost:3001/select
http://localhost:3001/update
http://localhost:3001/delete