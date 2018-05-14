FROM node

EXPOSE 9005
EXPOSE 3000

RUN npm i npm@latest -g && \
    npm install -g firebase-tools && \
    npm install -g create-react-app
WORKDIR /root
RUN mkdir .ssh
