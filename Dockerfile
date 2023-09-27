from node
env home /app
copy . .
run npm install
expose 80
entrypoint npm start
cmd port=80 npm=start
