FROM node:15.6.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN yarn install
RUN yarn build
RUN rm -rf ./node_modules

FROM node:15.6.0-alpine
COPY --from=build ./build ./build
RUN yarn install --production
EXPOSE 3000
CMD ["yarn", "serve"]
