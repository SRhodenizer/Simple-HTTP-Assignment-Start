const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getGar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpg' });
  response.write(spongegar);
  response.end();
};

module.exports.getGar = getGar;
