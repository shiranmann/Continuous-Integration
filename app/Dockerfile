# Use the official Node.js image.
FROM node:14

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Document that the service listens on port 9001.
EXPOSE 9001

# Run the web service on container startup.
CMD [ "npm", "start" ]