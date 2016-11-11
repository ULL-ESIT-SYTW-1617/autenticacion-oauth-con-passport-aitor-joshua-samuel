var fs = require('fs');

fs.readFile('.gitbook-start/token.txt', 'utf8' ,(err, data) => {
  if (err) console.log(err);
    console.log(data);
});
