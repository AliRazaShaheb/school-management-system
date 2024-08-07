# Use the official Node.js image
FROM node:21-alpine3.19

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Build the application using Vite
RUN npm run build


# Expose the frontend port
EXPOSE 4173

# Command to run the application
CMD ["npm", "run", "preview", "--", "--host"]
