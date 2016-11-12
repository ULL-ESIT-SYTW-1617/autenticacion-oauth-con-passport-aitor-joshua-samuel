var github = require('octonode');

var access = (token) => {
    console.log(token);
    var client = github.client(token);
    var ghme = client.me();
    
    ghme.orgs((organizations) => {
      console.log(organizations);
    });



}

module.exports.access = access;
