FROM node:14-alpine3.15 as builder
WORKDIR '/app'
COPY package.json .
RUN npm install --legacy-peer-deps
COPY ./ ./
RUN npm run build --legacy-peer-deps

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html