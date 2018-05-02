FROM node:latest

WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
COPY src/ /app/
CMD node index.js
EXPOSE 3000

