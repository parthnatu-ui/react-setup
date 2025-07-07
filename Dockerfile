FROM node:20-alpine AS builder



WORKDIR /app



COPY package*.json ./

RUN npm install --production=false

COPY . .

COPY index.html ./index.html



# Build the app for production

RUN npm run build



# --- Production Stage ---

FROM node:20-alpine AS production



WORKDIR /app



# Install a simple static file server

RUN npm install -g serve



# Copy only the build output from the previous stage

COPY --from=builder /app/dist ./dist



# Expose the port the app will run on

EXPOSE 3000



# Set environment variable for production

ENV NODE_ENV=production



# Start the app using serve

CMD ["serve", "-s", "dist", "-l", "3000"]