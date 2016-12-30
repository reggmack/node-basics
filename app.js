var profile = require("./profile.js");
var users = process.argv.slice(2);
//console.dir(process.argv);


//var users = ["chalkers", "reggiemack"];

/*profile.get("reggiemack");
profile.get("joykesten2");*/

/*users.forEach(function(username) {
   profile.get(username) 
});
*/

users.forEach(profile.get) 


