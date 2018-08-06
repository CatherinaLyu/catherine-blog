module.exports = {
  getExt: (fs, EventEmitter, extname) => {
    fs.readFile('./json/mime.json', (err, data) => {
      if (err) {
        console.log(err);
        return false;
      }
      const Mime = JSON.parse(data.toString());
      EventEmitter.emit('to_mime', Mime[extname] || 'text/html');
      // callback(Mime[extname]);
    });
  },
}