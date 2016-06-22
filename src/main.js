var Gnostic = require('./Gnostic');
var nconf = require('nconf');

nconf.add('config', {type: 'file', file: './configBot.json'});

try {
  var tokenSlack = process.env.TOKEN_SLACK || nconf.get('tokenslack');

  this.gnostic = new Gnostic(tokenSlack);
  this.gnostic.run();
} catch (error) {
  console.log('Bot failed' + error);
}
