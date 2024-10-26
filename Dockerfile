FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

Copy . .

Expose 5173 3000

CMD ["npm", "run", "dev"]