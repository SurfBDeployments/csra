# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package management files to leverage layer caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application files and compile
COPY . .
RUN npm run build

# Stage 2: Serve assets with Nginx
FROM nginx:alpine

# Copy our custom routing rules config over the default Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build static files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
