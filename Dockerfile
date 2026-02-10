# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/index.js

COPY package*.json .

RUN npm install
RUN chown -R node:node /usr/src/app

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm", "run", "dev"]
