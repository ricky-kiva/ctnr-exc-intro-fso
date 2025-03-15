FROM node:20

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node .

RUN npm install -g serve

USER node

RUN npm ci

RUN npm run build

CMD ["serve", "dist"]
