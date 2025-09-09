FROM node:18-alpine
# Base image used is node to host the JS application
# We are using alpine 13 for linux image to install node on top of our own app

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password 
# Environmental variables can be declared here     
# If env already declared in docker-compose, this can be ignored

WORKDIR /home/app       
# Run command of Linux to create app directory in /home                            
# RUN command runs on the Docker container not on host

COPY . .
# Copy Linux command to copy all the contents of JS and paste it in /home/app Container location
# Copy command runs on host not on container

RUN npm install

EXPOSE 3000

CMD ["node","/home/app/Server.js"]    
# CMD is to execute the Linux opertaions run and copy and source for copy and dest for run is mentioned here 

# Always save the docker file with the name Dockerfile.txt. No other name is allowed

# To build Docker image we use this docker file.