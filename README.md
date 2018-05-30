# fastify-docker-boilerplate
Boilerplate to node with docker.


- Build image `docker build -t restify-docker-boilerplate .` . 
- Runs container `docker run -p 3000:3000 restify-docker-boilerplate` .  
- Sharing image 
    - Build `docker build -t rdiego26/restify-docker-boilerplate .`
    - Login `docker login`
    - Push image `docker push rdiego26/restify-docker-boilerplate`
