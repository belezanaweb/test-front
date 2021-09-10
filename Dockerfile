
FROM node:12

WORKDIR /app

COPY package.json /app/package.json
RUN npm install --ignore-scripts --silent

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:docker"]
