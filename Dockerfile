FROM node:18.18.2-alpine3.18 as build
WORKDIR /health
COPY package.json index.js  /health/
RUN npm install

FROM alpine:latest as final
COPY --from=build /health /health
WORKDIR /health
RUN apk add --update  npm  --no-cache
CMD npm start
