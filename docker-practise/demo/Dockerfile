FROM node:18-alpine AS installer

WORKDIR /app
COPY package.json ./
RUN ["npm","install"]
COPY . .
RUN npm run build

FROM nginx:latest AS deployer
RUN rm -rf //usr/share/nginx/html/*
COPY --from=installer /app/dist /usr/share/nginx/html