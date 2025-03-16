FROM node:20 AS build-stage

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node .

USER node

RUN npm ci

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
