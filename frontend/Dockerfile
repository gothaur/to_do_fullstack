FROM node:12-alpine

WORKDIR /app/frontend

# # COPY package.json /app/frontend

# RUN npm install

# EXPOSE 3000

# CMD ["npm", "start"]

COPY ./frontend/package.json ./package.json

COPY ./frontend/src ./src

COPY ./frontend/public ./public