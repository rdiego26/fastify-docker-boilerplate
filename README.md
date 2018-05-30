# fastify-docker-boilerplate
Boilerplate to node with docker.
[![GitHub issues](https://img.shields.io/github/issues/rdiego26/fastify-docker-boilerplate.svg)](https://github.com/rdiego26/fastify-docker-boilerplate/issues) 
[![GitHub license](https://img.shields.io/github/license/rdiego26/fastify-docker-boilerplate.svg)](https://github.com/rdiego26/fastify-docker-boilerplate/blob/master/LICENSE)

- Build image `docker build -t restify-docker-boilerplate .` . 
- Runs container `docker run -p 3000:3000 restify-docker-boilerplate` .  
- Sharing image 
    - Build `docker build -t rdiego26/restify-docker-boilerplate .`
    - Login `docker login`
    - Push image `docker push rdiego26/restify-docker-boilerplate`
