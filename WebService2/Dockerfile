FROM node:11-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --production --quiet

COPY dist .

EXPOSE 3002