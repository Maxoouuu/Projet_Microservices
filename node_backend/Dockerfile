# Use the official Node.js runtime as the base image
FROM node

# Copy the current directory contents into the container at /usr/share
COPY . /usr/share/

# Set the working directory in the container to /usr/share
WORKDIR /usr/share

# Install any needed packages specified in package.json
RUN npm install

# Run server.js when the container launches
CMD ["node", "server.js"]
