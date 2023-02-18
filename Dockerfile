FROM node:14

WORKDIR /usr/src/app

COPY ./package.json ./ 
COPY ./yarn.lock ./ 

RUN npm install -g sass

RUN yarn install

COPY . . 

EXPOSE 3000

CMD ["yarn", "dev"]