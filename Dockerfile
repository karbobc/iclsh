FROM --platform=$TARGETPLATFORM nginx:alpine
RUN set -x \
    && rm -f /etc/nginx/conf.d/* \
    && rm -f /usr/share/nginx/html/*
COPY ./nginx /etc/nginx/conf.d/
COPY ./dist /usr/share/nginx/html/
EXPOSE 8088
CMD ["nginx", "-g", "daemon off;"]