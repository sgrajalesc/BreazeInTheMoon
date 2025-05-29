# Dockerfile básico para microservicios NestJS
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar el proyecto
RUN npm run build

# Exponer el puerto (ajústalo por microservicio si lo deseas)
EXPOSE 3000

# Comando de arranque
CMD ["npm", "run", "start:prod"]
