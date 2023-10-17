# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app


# Copy the package.json and yarn.lock files
COPY front/package.json front/yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Bundle app source
COPY front .

EXPOSE 3000

# Starts the app in development mode
ENTRYPOINT [ "yarn", "run" ] 
CMD ["dev"]