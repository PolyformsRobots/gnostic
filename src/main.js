var Ngostic = require('./ngostic');
var nconf = require('nconf');

nconf.add('config', {type: 'file', file: './configBot.json'});

try {
  var tokenSlack = process.env.TOKEN_SLACK || nconf.get('tokenslack');

  this.ngostic = new Ngostic(tokenSlack);
  this.ngostic.run();
} catch (error) {
  console.log('Bot failed' + error);
}
