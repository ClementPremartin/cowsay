const { campus } = require("./information.js");
const student = require("./information.js");

console.log(`Hi, im ${student.name} from campus ${student.campus}`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, im ${student.name} from campus ${student.campus}`,
    e : "oO",
    T : "U "
}));
