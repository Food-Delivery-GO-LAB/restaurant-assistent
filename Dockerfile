FROM node:14-alpine3.15 as builder
WORKDIR '/app'
COPY package.json .
COPY yarn.lock .
RUN yarn install --legacy-peer-deps
COPY ./ ./
RUN yarn run build --legacy-peer-deps

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
