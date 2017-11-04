FROM node

EXPOSE 8000

ADD ./ .
USER root

RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN dpkg -i google-chrome-stable_current_amd64.deb; apt-get -fy install


RUN npm -g update npm && npm install && npm run test
