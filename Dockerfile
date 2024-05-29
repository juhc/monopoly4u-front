FROM node:16-alpine as frontend

WORKDIR /app

COPY package*.json .
RUN npm install 

COPY . .

RUN npm run build 

FROM nginx:bookworm
COPY --from=frontend /app/dist /usr/share/nginx/html
