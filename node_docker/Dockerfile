# Dockerfile reference:
# https://docs.docker.com/engine/reference/builder/

# Dockerfile best practice:
# https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/

# Use an official node runtime as a base image
FROM node:boron-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

RUN npm install pm2 -g

# We don't run npm install here. It will be wiped out by data volume. We need to run them manually before we run docker-composer up.
# Reason: https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds

# Make ports available to the world outside this container
# 80: http
# 9229: node debug
EXPOSE 80 9229

# Run pm2-dev server.js when the container launches
# http://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/#docker-integration
CMD ["pm2-dev", "server.js"]
