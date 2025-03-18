FROM node:20 AS dependencies-stage

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node .

RUN npm ci

FROM dependencies-stage AS test-stage

RUN npm test

FROM test-stage AS build-stage

ENV VITE_BACKEND_URL=http://localhost:8080/api 

RUN npm run build

RUN npm install -g serve

USER node

CMD ["serve", "dist"]
