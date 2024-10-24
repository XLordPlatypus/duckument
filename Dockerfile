FROM node:20.18.0

WORKDIR /app

COPY package*.json ./

RUN npm install

Copy . .

RUN npx tsc --build

Expose 5173

CMD ["npm", "run", "dev"]