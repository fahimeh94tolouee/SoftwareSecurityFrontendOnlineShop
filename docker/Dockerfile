FROM node:8.15.1-stretch
COPY . /usr/local/sbin/project
WORKDIR /usr/local/sbin/project
RUN npm install && npm run build
EXPOSE 3000
ENTRYPOINT ["npm","start"]
