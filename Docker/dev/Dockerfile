FROM node:carbon

EXPOSE 9005
EXPOSE 3000

USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm i npm@latest -g && npm install -g rimraf && npm install -g create-react-app && npm install -g firebase-tools

WORKDIR /node
