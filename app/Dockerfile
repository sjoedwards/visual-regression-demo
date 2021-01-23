FROM node:15.6.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

FROM node:15.6.0-alpine
WORKDIR /app
COPY --from=build /app/build build
COPY --from=build /app/package.json package.json
COPY --from=build /app/yarn.lock yarn.lock
RUN yarn install --production
EXPOSE 3000
