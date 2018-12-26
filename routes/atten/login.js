/*om*/
console.log('atten->');
/**/
const date = require('date-and-time');
let now = new Date();
// Cg.title = 'Geo Attendance';
// Cg.websid = 'geointime.com';
/* GET home page. */
exports.html = function(req, res, next) {
    // res.render('index', { title: 'GeoInTime' });
    res.render('limit_less/atten/login', { xtitle: 'content-education' });
};

