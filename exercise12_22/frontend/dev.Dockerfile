FROM node:20

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node node_modules

RUN npm install

RUN npm install -g vite

ENV VITE_BACKEND_URL=http://localhost:8080/api

USER node

CMD ["npm", "run", "dev", "--", "--host"]
