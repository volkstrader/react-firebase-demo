FROM node

EXPOSE 9005
EXPOSE 3000

RUN git config --global user.email "cchau2@gmail.com" && git config --global user.name "Chuck Chau"
RUN npm i npm@latest -g && npm install -g firebase-tools && npm install -g create-react-app
WORKDIR /root
