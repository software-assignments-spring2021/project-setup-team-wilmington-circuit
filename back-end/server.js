#!/usr/bin/env node

const server = require("./app")
const port = 3001;

const listener = server.listen(port, function() {
  console.log(`Server running on port: ${port}`)
});

const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}
