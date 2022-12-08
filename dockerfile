FROM node:16-alpine
LABEL maintainer="Yuji Sato <yujisato.usk.jpn@gmail.com>"

#Execute a command
RUN mkdir -p /usr/src/app
#Set this directory as the working directory for any COPY, RUN and CMD
WORKDIR /usr/src/app
# Copy files from a source to a destination.
COPY package*.json ./

# RUN npm install -g nodemon
RUN npm install --production && npm cache clean --force

# Date timezone settings
RUN apk add --no-cache tzdata
ENV TZ Europe/Rome
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone



COPY public/image/workout-images ./public/image/workoutimages
COPY public/image ./public/image

COPY .env .


COPY api ./api
COPY public/scripts ./public/scripts
COPY public/styles ./public/styles

COPY server.js .
# COPY public/pages ./public/pages
COPY public ./public


# exposes a port which the container will listen on.
EXPOSE 80

## Launch the wait tool and then your application
#CMD node server.js
CMD ["npm", "start"]
