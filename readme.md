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


# Microservices Project Architecture

This document provides an overview of the microservices architecture for the project.

## Services

The project is composed of two main services: the frontend and the backend.

### Frontend Service

- **Container Name**: `frontend-1`
- **Base Image**: `nginx`
- **Port Mapping**: Host `9091` to Container `80`
- **Volume Mapping**: Host's `web_frontend` directory to Container's `/usr/share/nginx/html`
- **Main File**: `index.html` (makes a request to the backend on `http://127.0.0.1:8081/colors`)

### Backend Service

- **Container Name**: `backend-1`
- **Base Image**: `node`
- **Port Mapping**: Host `8081` to Container `8081`
- **Volume Mapping**: Host's `node_backend` directory to Container's `/usr/share`
- **Main File**: `server.js` (serves root and `/colors` endpoints)

## Docker Compose

Orchestrates the services as defined in the `docker-compose.yaml` at the root of the project.

### Network Interaction

A request is made from the frontend service to the backend service for the `/colors` endpoint. The frontend is accessible to the user's browser through port `9091`.

## Project File Structure

- `docker-compose.yaml`: Contains the configuration to build and run both `frontend` and `backend` services.
- `web_frontend`:
  - `Dockerfile`: Instructions to build the frontend service container.
  - `index.html`: The HTML file served by the nginx container.
- `node_backend`:
  - `Dockerfile`: Instructions to build the backend service container.
  - `server.js`: The Node.js express server application.

## User Interaction

Users interact with the frontend via their web browsers by accessing `http://localhost:9091`, which serves the `index.html` file making requests to the backend service.

---
