FROM node:20

WORKDIR /usr/src/app

COPY . .

USER root

RUN npm install --include-dev

EXPOSE 3000

USER node

CMD ["npm", "run", "dev", "--", "--legacy-watch"]
