# Stage 1, lets build this thing!
FROM node:8 as build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2, the production app
FROM nginx:alpine
COPY --from=build /app/build/ /usr/share/nginx/html/
EXPOSE 80
