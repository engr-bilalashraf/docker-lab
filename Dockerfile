FROM nginx:alpine

WORKDIR /StaticApp

COPY index.html style.css script.js /StaticApp

EXPOSE 80
