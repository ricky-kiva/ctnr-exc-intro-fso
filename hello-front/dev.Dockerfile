FROM node:20

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node .

USER node

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]
