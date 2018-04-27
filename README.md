# node-docker-boilerplate
Boilerplate to node with docker.


- Build image `docker build -t node-docker-boilerplate` . 
- Runs container `docker run -p 8081:8081 node-docker-boilerplate` .  
- Sharing image 
    - Build `docker build -t rdiego26/node-docker-boilerplate`
    - Login `docker login`
    - Push image `docker push rdiego26/node-docker-boilerplate`