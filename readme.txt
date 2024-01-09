![image1](https://github.com/Maxoouuu/docker_compose/assets/76161577/5f57b103-531f-4e5e-a78c-468708899d0e)
![image2](https://github.com/Maxoouuu/docker_compose/assets/76161577/fe9a67e9-bb20-4b6a-9610-14e4847762b4)
![image3](https://github.com/Maxoouuu/docker_compose/assets/76161577/2fdc5d2d-56ee-4b3b-a504-7e1285466a13)
![image4](https://github.com/Maxoouuu/docker_compose/assets/76161577/249c5b2c-2078-4ae3-934a-edc3c835b292)
![image5](https://github.com/Maxoouuu/docker_compose/assets/76161577/18951fe4-4f97-4258-8784-6c3c38a3593a)
![image6](https://github.com/Maxoouuu/docker_compose/assets/76161577/7a2f1919-a320-4503-b565-2dda5c37e4e8)


To start the server, run the following command in the node_backend folder :

node .\server.js

and open with live server the index.html file in the frontend folder to see the result.

Backend : express js 
Frontend : html/css/js.


# Frontend Container:

Label: frontend-1
Image: nginx
Port: 9091:80
Volume Mapping (indicated with a dashed line): Maps the web_frontend directory from the host to /usr/share/nginx/html in the container.
Includes index.html which makes a request to the backend.

# Backend Container:

Label: backend-1
Image: node
Port: 8081:8081
Volume Mapping: Maps the node_backend directory from the host to /usr/share in the container.
Includes server.js which serves the root and /colors endpoints.

# Docker Compose Service:

Encapsulates both the frontend and backend containers.
Indicates the build context for each service as defined in docker-compose.yaml.

# Network Interaction:

A directed line or arrow from the frontend-1 container to the backend-1 container indicating the request flow to the /colors endpoint.

# Project Files:

Indicate the location of Dockerfile and other configuration files like .gitignore, package.json, and docker-compose.yaml.

# External Interaction:

An arrow from the user's browser pointing to the frontend-1 container's port 9091, representing how a user would interact with the application.