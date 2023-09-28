FROM node
ENV home /app
COPY . /app
RUN npm install
EXPOSE 80
ENTRYPOINT npm start
CMD npm start
