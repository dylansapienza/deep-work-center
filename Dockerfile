FROM node:14 AS ui-build

WORKDIR  /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT = 5000

EXPOSE 5000

CMD ["node", "server.js"]
