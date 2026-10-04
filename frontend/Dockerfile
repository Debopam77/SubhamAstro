# ==========================================
# Stage 1: Development
# ==========================================
FROM node:20-alpine AS development

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Start development server with network binding
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# ==========================================
# Stage 2: Production Build
# ==========================================
FROM development AS builder

RUN npm run build

# ==========================================
# Stage 3: Production Web Server
# ==========================================
FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
