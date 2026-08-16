# Stage 1: Build stage
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production Server Runtime
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy package management files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy the generated build output from the builder stage
COPY --from=builder /app/build ./build

EXPOSE 8080

# Starts @react-router/serve on port 8080
CMD ["npm", "run", "start"]