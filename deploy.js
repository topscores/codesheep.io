var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish(path.join(__dirname, 'public'), function(err) { console.log(err) });