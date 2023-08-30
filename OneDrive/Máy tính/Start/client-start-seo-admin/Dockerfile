FROM harbor.infra.zalo.services/za/node:16 AS build-stage

# Set working directory
WORKDIR /app


# RUN export NODE_OPTIONS=--openssl-legacy-provider
COPY . .
RUN npm config set legacy-peer-deps true
RUN npm install

RUN npm run build

# 2. For Nginx setup
FROM harbor.infra.zalo.services/dockerhub_proxy_cache/library/nginx as production-stage

WORKDIR /app

COPY --from=build-stage /app/dist /app 
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
