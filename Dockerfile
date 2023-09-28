FROM node
ENV home /app
COPY . .
RUN npm install
EXPOSE 80
ENTRYPOINT npm start
CMD PORT=80 npm=start