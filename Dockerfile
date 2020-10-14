FROM node:13-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "run", "start"]
