FROM node:20.9.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install vite 

RUN npm install esbuild@0.21.5 vite@5.2.11

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g" , "daemon off;"]
