FROM node:latest

RUN adduser -ms /bin/bash api
USER api

WORKDIR /app
COPY --chown package.json /app
RUN yarn install
COPY --chown . /app
COPY --chown src/ /app/
CMD node index.js
EXPOSE 3000

