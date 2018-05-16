FROM node:carbon

EXPOSE 9005
EXPOSE 3000

<<<<<<< HEAD
USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm i npm@latest -g && npm install -g rimraf && npm install -g create-react-app && npm install -g firebase-tools

WORKDIR /node
=======
RUN npm i npm@latest -g && \
    npm install -g firebase-tools && \
    npm install -g create-react-app
WORKDIR /root
RUN mkdir .ssh
>>>>>>> 015e236b33bdf211f4b1083eb79cc0a427836ece
