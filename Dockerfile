FROM node:10-alpine
WORKDIR ./welp
COPY package*.json ./
RUN npm install && apk update && apk add bash && apk add vim

COPY . .
EXPOSE 3000
CMD ["npm", "start"]