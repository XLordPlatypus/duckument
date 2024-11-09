# Duckument v0.12.0

A simple document software with markdown. Powered with Node + Express, Reactjs + Vite and  a MongoDB

Basically create workspaces (folders) and in these you can create pages.

It can do some basic CRUD operations but is not complete.
I may work on it in the future.

## Setup with docker

Build application:
```bash
npx tsc --build
```

Run application the first time
```bash
docker compose up --build
```

Without building
```bash
docker compose up -d
```


