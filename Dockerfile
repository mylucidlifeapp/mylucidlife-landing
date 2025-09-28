# Stage 1: Build the React application
FROM node:20-alpine AS build
WORKDIR /app
# Add these lines to install required dependencies for esbuild
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application from a lightweight Nginx server
FROM nginx:1.25-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]