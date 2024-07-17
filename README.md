Clone este repositório para sua pasta de trabalho;<br>
Abra o terminal na pasta e rode: <br>
    docker compose up --build<br>
na primeira ve, nas proximas apenas um<br>
    docker compose up<br>

E no linux, dependendo da configuração, coloque o sudo antes :smile:
    
O docker irá dar pull nas imagens e iniciar 2 containers:<br>
servidor e postgres.<br>
Espere todos os 2 estarem prontos, observe no no terminal se as seguintes mensagens aparecem:<br>
    db-1       | 2024-07-14 18:19:29.883 UTC [1] LOG:  database system is ready to accept connection<br>
    web-1      | Server running at http://0.0.0.0:3000<br>

Após isso: <br>
Vá ao navegador e acesse http://localhost:3001. <br>
Há 4 rotas para teste (ou 5 se contar a '/', que mostra os formulários):<br>
http://localhost:3001/insert<br>
http://localhost:3001/select<br> 
http://localhost:3001/update<br>
http://localhost:3001/delete
