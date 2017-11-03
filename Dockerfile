FROM node

EXPOSE 8000

ADD ./ .
USER root

RUN npm -g update npm && npm install && npm run test
