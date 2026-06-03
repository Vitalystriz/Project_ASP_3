FROM node:lts-alpine3.21

WORKDIR /app/src
RUN npm init -y

RUN npm install express
COPY . .

CMD ["node", "app.js"]

