FROM node:18-alpine
RUN addgroup developers && adduser -S -G developers kenitua
USER root
WORKDIR /Photoapp
COPY  package*.json .
RUN chown -R kenitua:developers /Photoapp
RUN npm install
COPY . .
ENV USERID=kenisa
EXPOSE 3000
CMD ["npm","run","dev"]