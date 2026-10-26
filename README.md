# Docker Static Website Practice

## 1. Image banao
docker build -t my-static-site .

## 2. Container chalao
docker run -d -p 8080:80 --name my-site my-static-site

## 3. Browser mein kholo
http://localhost:8080

## Useful commands
docker ps                 # running containers
docker logs my-site       # logs dekho
docker stop my-site       # rokna
docker rm my-site         # delete karna
docker images             # images list
docker rmi my-static-site # image delete karna
