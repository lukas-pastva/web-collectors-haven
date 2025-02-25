# Use an official Node.js runtime as the base
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy all other backend files
COPY . .

# Expose port
EXPOSE 3001

# Start the server
CMD ["npm", "start"]
