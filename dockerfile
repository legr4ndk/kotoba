# Pull base image.
FROM node:16-alpine
# Create app directory
WORKDIR /usr/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@6+)
COPY package*.json ./
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
COPY . .

# Install sqlite3
RUN apk add --update sqlite
RUN sqlite3  src/words.db

EXPOSE 80
CMD ["node","src/index.js"]