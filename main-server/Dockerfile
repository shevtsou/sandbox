FROM node:lts-alpine
COPY ./package*.json ./
RUN npm i --production
COPY ./ ./
CMD ["node", "server.js"]