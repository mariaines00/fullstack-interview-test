### STAGE 1: Build ###
# base image
FROM node:10-alpine as builder

WORKDIR /app

# install dependencies
COPY package.json .
RUN npm install --silent

COPY . .

# build frontend dist
RUN npm run build

### STAGE 2: Setup ###

# base image
FROM nginx:alpine

#remove defaults
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

