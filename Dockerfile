FROM node:14-alpine3.15 as builder
WORKDIR '/app'
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./

RUN yarn run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80