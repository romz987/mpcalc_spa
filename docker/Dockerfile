# 1. Используем легковесный Node.js для сборки
FROM node:18-alpine AS builder

WORKDIR /app

# 2. Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# 3. Копируем весь код проекта
COPY . .

# 4. Собираем приложение
RUN npm run build

# 5. Используем минимальный Nginx для раздачи статики
FROM nginx:alpine

# 6. Копируем только билд фронта
COPY --from=builder /app/dist /usr/share/nginx/html

# 7. Открываем порт 80
EXPOSE 80

# 8. Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
