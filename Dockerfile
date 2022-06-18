FROM node:14.16.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
ENV NODE_ENV=production
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]