FROM node:14.5

RUN mkdir -p $HOME/exporter

WORKDIR $HOME/exporter

COPY . .

CMD "npm run start:prod"