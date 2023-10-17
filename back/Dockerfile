# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app


# Copy the package.json and yarn.lock files
COPY back/package.json back/yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Bundle app source
COPY back .

# Creates a "dist" folder with the production build
RUN npm run build