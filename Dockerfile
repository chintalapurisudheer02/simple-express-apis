# Use the official Node.js image as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /simple-express-api

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "index.js"]  # Replace 'index.js' with your main file if it's different
