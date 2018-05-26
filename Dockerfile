FROM node:latest

RUN adduser -ms /bin/bash api
USER api

WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD node index.js
EXPOSE 8081

