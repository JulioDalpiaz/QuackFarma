FROM node:20-alpine

WORKDIR /megaprojeto/server

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
