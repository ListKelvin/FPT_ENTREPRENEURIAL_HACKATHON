FROM node:16.14.2
WORKDIR /app_fe
COPY package.json .
RUN yarn install
COPY . .