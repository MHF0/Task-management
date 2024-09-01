# Step 1: Build the React application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (if exists)
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Clear pnpm cache (optional)
RUN pnpm store prune

# Build the React application
RUN pnpm run build

# Step 2: Serve the React application
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
