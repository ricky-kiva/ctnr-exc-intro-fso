FROM node:20

WORKDIR /usr/src/app

COPY . .

USER root
RUN chown -R node:node node_modules

USER node

RUN npm install

ENV VITE_BACKEND_URL=http://localhost:3000/

CMD ["npm", "run", "dev", "--", "--host"]
