## Docker Project – User Info App with MongoDB

This is my DevOps learning project where I containerized a full-stack web application to store user information using Docker and Docker Compose with multiple containers.

This project showcases my skills in Web application development, Docker image creation, Containerization and app deployment using Docker.

All the files added can be used to replicate in local environment upon testing to implement and utilize the dockerized application.

## Project Overview

**Frontend:** HTML form to collect user data

**Backend:** Node.js server to handle form submission

**Database:** MongoDB to store user data

**DB UI:** Mongo Express for viewing data in browser

**Orchestration:** Docker Compose to manage multi-container setup

## Project Structure
project-root/

├── Dockerfile

├── docker-compose.yml

├── profile.html

├── Server.js

└── README.md  

## What I Did

- Fetched a sample app html and js script
- Built a Docker image for the Node.js app using a `Dockerfile`
- Created a `docker-compose.yml` to manage:
  - App container (`my-app`)
  - MongoDB container
  - Mongo Express container
- Connected the Node.js backend to MongoDB
- Used Mongo Express to verify stored user data
- Verified complete containerized workflow using `localhost` for UI and DB in browser

## How to Run

**1.Clone the repo**
```code
git clone https://github.com/vbaska3001/Docker_Project.git
cd Docker_Project
```
**2. Build and Run**
```code
docker-compose up --build
```
**3. Access the App**

App UI: http://localhost:3000
Mongo Express DB UI: http://localhost:8081

## Key Learning Outcomes
- Dockerized a Node.js application written for user input collection
- Setup MongoDB and Mongo Express as services for DB storage of user data
- Used Docket Compose for Networking between containers and run multiple containers
- Used Volume and environment variable for storage volatility
- Containerized End-to-end application development and deployment using Docker.

## Notes
- Default MongoDB credentials are admin / password
- Make sure Docker Desktop is running on your system before starting the containers
- This project is part of my DevOps learning journey and showcases Docker image creation, Container orchestration and app deployment using Docker image.
- Make sure to replicate the files in temp space and test it before deployment as this is just a demo setup for learning purpose only.
