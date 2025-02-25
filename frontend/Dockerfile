# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Optionally, install react-router-dom if not in package.json
RUN npm install react-router-dom

# Copy the entire frontend code and build
COPY . .
RUN npm run build

# Stage 2: NGINX for serving the production build
FROM nginx:1.23-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

# NGINX will serve the build by default
