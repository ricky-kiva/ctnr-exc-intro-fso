FROM node:20

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node node_modules

USER node

RUN npm install --include=dev

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--legacy-watch"]
