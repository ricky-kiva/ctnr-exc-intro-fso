FROM node:20

WORKDIR /usr/src/app

USER root

COPY --chown=node:node . .

RUN npm ci

USER node

CMD npm run start
