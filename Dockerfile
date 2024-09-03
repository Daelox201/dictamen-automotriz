FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Ejecutar Vite sin abrir el navegador y escuchar en todas las interfaces
CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "8100", "--no-open"]
