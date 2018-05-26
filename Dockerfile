FROM node:latest

RUN adduser -ms /bin/bash api
USER api

WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
COPY src/ /app/
CMD node index.js
EXPOSE 3000

