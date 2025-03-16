FROM node:20 AS dependencies-stage

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node .

USER node

RUN npm ci

FROM dependencies-stage AS test-stage

RUN npm test

FROM test-stage AS build-stage

ENV VITE_BACKEND_URL=http://localhost:3000/ 

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
