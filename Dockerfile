# Use the official Node.js 18.x image as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 8000
EXPOSE 8000

# Command to run the app
CMD ["npm", "start"]